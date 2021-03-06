import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  return (
    <header className='header'>
      <div className='header__brand'>
        <button className='header__hamburgerMenu' onClick={openMenu}>
          <MenuIcon style={{ fontSize: '3rem' }} />
        </button>
        <Link to='/'>
          amakey
          <small style={{ fontSize: '1.4rem', fontWeight: '100' }}>
            .co.uk
          </small>
        </Link>
      </div>

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon
          style={{
            height: '3rem',
            width: '3rem',
            marginTop: '0.5rem',
            marginLeft: '0.7rem',
            marginRight: '0.3rem',
          }}
        />
      </div>

      <div className='header__nav'>
        <div className='header__navLink'>
          <div className='header__navLinkOne'>
            Hello,
            {userInfo ? (
              <span to='/profile'>{userInfo.name}</span>
            ) : (
              <span>Guest</span>
            )}
          </div>
          <div>
            {userInfo ? (
              <Link to='/logout' className='header__navLinkTwo'>
                Logout
              </Link>
            ) : (
              <Link to='/signin' className='header__navLinkTwo'>
                Sign in
              </Link>
            )}
          </div>
        </div>
        <div className='header__navLink'>
          <span className='header__navLinkOne'>Returns</span>
          <span className='header__navLinkTwo'>& Orders</span>
        </div>
        <div className='header__shoppingCart'>
          <ShoppingCartIcon style={{ fontSize: '3.5rem' }} />
          <span className='header__basketCount'>0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
