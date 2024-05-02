import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext'; // Import AppContext

const Footer = () => {
  const { user } = useContext(AppContext); // Use context

  return (
    <footer>
      {user.isLoggedIn && ( // Conditionally render based on user login status
        <p>
          Contact us: <a href="#">support@ourcompany.com</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
