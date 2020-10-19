import React from 'react';
import Products from './Products';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <main className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-ZTYzZmYwZTYt-w1500._CB404747132_.jpg'
          alt='Echo Family'
          className='home__image'
        />
      </div>
      <Sidebar />
      <Products />
    </main>
  );
};

export default Home;
