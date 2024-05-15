import React, { createContext, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheet, css } from 'aphrodite';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

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

const App = ({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) => {
  const [listNotifications, setListNotifications] = useState([]);

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter(notification => notification.id !== id));
  };

  const logIn = (email, password) => {
    setIsLoggedIn(true);
  };
  
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ user: { isLoggedIn }, markNotificationAsRead }}>
      <div className={css(styles.body)}>
        <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} />
        <div className={css(styles.app)}>
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login onLogin={logIn} />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
