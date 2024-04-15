import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div>
        {displayDrawer && (
          <div className="menuItem">
            Your notifications
          </div>
        )}
        <div className={displayDrawer ? 'Notifications' : 'hidden'}>
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
