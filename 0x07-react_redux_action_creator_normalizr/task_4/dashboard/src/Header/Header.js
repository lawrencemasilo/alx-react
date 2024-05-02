import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className='Header'>
      <h1>Header</h1>
      {user.isLoggedIn && (
        <div id='logoutSection'>
          Welcome {user.email} (<span onClick={handleLogOut}>logout</span>)
        </div>
      )}
    </div>
  );
};

export default Header;
