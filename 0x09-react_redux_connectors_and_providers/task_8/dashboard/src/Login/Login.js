import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email !== '' && this.state.password !== '' });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: password !== '' && this.state.email !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={this.handleChangeEmail} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={this.handleChangePassword} />

            <input type="submit" value="Submit" disabled={!enableSubmit} />
          </form>
        </div>
      </>
    );
  }
}

export default Login;
