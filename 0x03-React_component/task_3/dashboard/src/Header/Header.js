import React from 'react';
import logo from './holbertonlogo.jpg';
import './Header.css';

function Header() {
  return (
    <div className='App-header'>
      <img src={logo} alt='logo' className='App-logo' />
      <h1 className='App-Header-Title'>School dashboard</h1>
    </div>
  );
}

export default Header;
