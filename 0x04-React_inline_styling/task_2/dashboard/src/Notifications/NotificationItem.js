import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, value, html, markAsRead }) => {
  let className = '';

  if (type === 'default') {
    className = css(styles.default);
  } else if (type === 'urgent') {
    className = css(styles.urgent);
  }

  return (
    <li onClick={() => markAsRead && markAsRead(value)} className={className} dangerouslySetInnerHTML={html}></li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  value: '',
  html: {},
  markAsRead: null,
};

export default NotificationItem;
