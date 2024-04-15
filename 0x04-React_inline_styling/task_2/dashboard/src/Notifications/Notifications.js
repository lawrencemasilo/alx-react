import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid black',
    padding: '10px',
  },
  defaultPriority: {
    color: 'blue',
  },
  urgentPriority: {
    color: 'red',
  },
});

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div>
      {displayDrawer && (
        <div className="menuItem">
          Your notifications
        </div>
      )}
      <div className={css(styles.notifications, displayDrawer ? '' : 'hidden')}>
        <button style={{ position: 'absolute', right: '0', top: '0' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
          <img src="close-icon.png" alt="Close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.map(notification => (
            <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
