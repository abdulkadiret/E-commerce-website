import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='signin__form'>
      <form onSubmit={handleSubmit}>
        <div className='signin__container'>
          <div className='text__center'>
            <h2 className='signin__heading'>Sign-in</h2>
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
