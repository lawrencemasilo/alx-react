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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  return (
    <div className={css(styles.body)}>
      <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />
      <div className={css(styles.app)}>
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login onLogin={() => setIsLoggedIn(true)} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
