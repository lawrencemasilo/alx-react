import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : null}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
