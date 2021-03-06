import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../redux/actions/actions';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
    return () => {
      //
    };
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className='signin__form'>
      <form onSubmit={handleSubmit}>
        <div className='signin__container'>
          <div className='text__center'>
            <h2 className='signin__heading'>Sign-in</h2>
            {loading && <span className='text__center'>Loading... </span>}
            {error && (
              <span className='text__center error'>{error.customMessage}</span>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className='user__input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='user__input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type='submit' className='button primary'>
              Sign In
            </button>
            <p className='text__center'>Are you new to amakey?</p>
            <Link to='/register' className='register__link text__center'>
              Create your amakey account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
