import React, { createContext, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheet, css } from 'aphrodite';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout
} from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  body: {
    margin: '0',
    padding: '0',
    fontFamily: 'Arial, sans-serif',
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});

export const AppContext = createContext();

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout }) => {
  const [listNotifications, setListNotifications] = useState([]);

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter(notification => notification.id !== id));
  };

  const handleLogin = (email, password) => {
    loginRequest(email, password);
  };

  return (
    <AppContext.Provider value={{ user: { isLoggedIn }, markNotificationAsRead }}>
      <div className={css(styles.body)}>
        <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} />
        <div className={css(styles.app)}>
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login onLogin={handleLogin} />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  loginRequest: () => {},
  logout: () => {},
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);