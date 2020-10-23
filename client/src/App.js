import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
