import React from 'react';
import { connect } from 'react-redux';
import { logout } from './actions';

const Header = ({ user, logout }) => {
  return (
    <header>
      {user ? (
        <div>
          <span>Welcome, {user.name}</span>
          <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>Logout</a>
        </div>
      ) : (
        <div>Please log in.</div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
