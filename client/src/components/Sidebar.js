import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const Sidebar = (props) => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__left'>
        <div className='sidebar__leftOverlay'>
          <div className='sidebar__header'>
            <h3 className='sidebar__title'>Shopping Categories</h3>
            <button className='sidebar__closeButton' onClick={props.closeMenu}>
              <CloseIcon style={{ fontSize: '2rem' }} />
            </button>
          </div>
          <ul className='categories'>
            <li className='category'>
              <a href='index.html'>Shirts</a>
            </li>
            <li className='category'>
              <a href='index.html'>Trousers</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
