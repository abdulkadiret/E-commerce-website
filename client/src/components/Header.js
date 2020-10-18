import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='header__brand'>
        <button classNam='header__hamburgerMenu' onClick={() => {}}>
          ICON
        </button>
        <a href='index.html'>
          amakey
          <small style={{ fontSize: '1.4rem', fontWeight: '100' }}>
            .co.uk
          </small>
        </a>
      </div>

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        ICON
      </div>

      <div className='header__nav'>
        <div className='header__navLink'>
          <span className='header__navLinkOne'>Hello, Guest</span>
          <span className='header__navLinkTwo'>Sign in</span>
        </div>
        <div className='header__navLink'>
          <span className='header__navLinkOne'>Returns</span>
          <span className='header__navLinkTwo'>& Orders</span>
        </div>
        <div className='header__shoppingCart'>
          ICON
          <span className='header__basketCount'>0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
