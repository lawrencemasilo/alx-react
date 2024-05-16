import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ user }) => {
  return (
    <footer>
      {user ? (
        <div>Welcome, {user.name}!</div>
      ) : (
        <div>Please log in.</div>
      )}
    </footer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);
