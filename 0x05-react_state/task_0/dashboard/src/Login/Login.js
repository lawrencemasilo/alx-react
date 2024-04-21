import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
});

function Login() {
  return (
    <div className={css(styles.container)}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" className={css(styles.input)} />
      
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" className={css(styles.input)} />
      
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
