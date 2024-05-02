import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheet, css } from 'aphrodite';

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

export const AppContext = React.createContext(); // Create AppContext

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listNotifications, setListNotifications] = useState([]); // Add listNotifications state

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter(notification => notification.id !== id));
  };

  const logIn = (email, password) => {
    // Logic to log in user
    setIsLoggedIn(true);
  };

  const logOut = () => {
    // Logic to log out user
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ user: { isLoggedIn }, markNotificationAsRead }}> {/* Pass context value */}
      <div className={css(styles.body)}>
        <Notifications listNotifications={listNotifications} /> {/* Pass listNotifications */}
        <div className={css(styles.app)}>
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login onLogin={logIn} />} {/* Pass logIn function */}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
