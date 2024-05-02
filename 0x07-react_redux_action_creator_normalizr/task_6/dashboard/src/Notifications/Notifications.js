import React, { useContext } from 'react';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext'; // Import AppContext

const styles = StyleSheet.create({
  Notifications: {
    border: '1px solid black',
    padding: '10px',
  },
  hidden: {
    display: 'none',
  },
});

const Notifications = () => {
  const { listNotifications, markNotificationAsRead } = useContext(AppContext); // Use context

  return (
    <div className={css(styles.Notifications)}>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.map(notification => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
            markAsRead={markNotificationAsRead} // Use markNotificationAsRead function from context
          />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
