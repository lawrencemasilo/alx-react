import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '10rem',
    height: '10rem',
  },
  title: {
    color: '#e23548',
  },
});

const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src="/logo.png" className={css(styles.logo)} alt="Logo" />
      <h1 className={css(styles.title)}>Dashboard</h1>
    </div>
  );
};

export default Header;
