import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead } = this.props;

    return (
      <li onClick={() => markAsRead(html.__html)}>
        {type} - {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;