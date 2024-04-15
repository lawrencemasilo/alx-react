import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, html: { __html: 'New course available' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'New resume available' },
    // Add more notifications as needed
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login onLogin={() => setIsLoggedIn(true)} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
