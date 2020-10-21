import React from 'react';
import Products from './Products';
import Sidebar from './Sidebar';
import Carousel from './Carousel';

const Home = () => {
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <main className='home'>
      <div className='home__container'>
        <Carousel />
      </div>
      <Sidebar closeMenu={closeMenu} />
      <Products />
    </main>
  );
};

export default Home;
