import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationsPanel: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '20px',
  },
});

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      {displayDrawer && (
        <div className={css(styles.notificationsPanel)}>
          <ul className={css(styles.ul)}>
            {listNotifications.map((notification) => (
              <li key={notification.id}>{notification.value}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Notifications;
