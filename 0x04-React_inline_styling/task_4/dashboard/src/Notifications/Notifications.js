import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css, keyframes } from 'aphrodite';

const fadeIn = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

const bounce = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
});

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: [bounce, fadeIn],
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3, 1',
    animationTimingFunction: 'ease, ease',
    zIndex: '100',
  },
  menuItemHidden: {
    display: 'none',
  },
  Notifications: {
    border: '1px solid black',
    padding: '10px',
  },
  hidden: {
    display: 'none',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div>
        <div
          className={`${css(styles.menuItem)} ${displayDrawer ? css(styles.menuItemHidden) : ''}`}
          onClick={() => console.log('close button has been clicked')}
        >
          Your notifications
        </div>
        <div className={displayDrawer ? css(styles.Notifications) : css(styles.hidden)}>
          <button style={{ position: 'absolute', right: '0', top: '0' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
            <img src="close-icon.png" alt="Close" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    html: PropTypes.object.isRequired,
  })).isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
