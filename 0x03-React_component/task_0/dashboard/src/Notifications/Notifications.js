import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const Notifications = ({ displayDrawer }) => {
  const [menuNotifications, setMenuNotifications] = useState(true);

  const handleToggleDrawer = () => {
    setMenuNotifications(!menuNotifications);
  };

  return (
    <div>
      {menuNotifications && (
        <div className="menuItem">
          Your notifications
        </div>
      )}
      <div className={displayDrawer ? 'Notifications' : 'hidden'}>
        <button style={{ position: 'absolute', right: '0', top: '0' }} aria-label="Close" onClick={handleToggleDrawer}>
          <img src="close-icon.png" alt="Close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
