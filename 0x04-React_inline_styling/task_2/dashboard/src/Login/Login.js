import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    borderTop: '4px solid #e23548',
    padding: '10px',
    marginTop: '20px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  inputLabel: {
    marginBottom: '5px',
    display: 'block',
  },
  inputField: {
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#e23548',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
  },
  paragraph: {
    marginLeft: '20px',
    fontSize: '20px',
  },
});

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
      <label className={css(styles.inputLabel)} htmlFor="email">Email:</label>
      <input className={css(styles.inputField)} type="email" id="email" />

      <label className={css(styles.inputLabel)} htmlFor="password">Password:</label>
      <input className={css(styles.inputField)} type="password" id="password" />

      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
