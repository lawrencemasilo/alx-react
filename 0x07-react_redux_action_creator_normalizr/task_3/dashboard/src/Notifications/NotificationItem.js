import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
    marginBottom: '10px',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, value, html, markAsRead }) => {
  let className = css(styles.item);
  
  if (type === 'default') {
    className += ` ${css(styles.default)}`;
  } else if (type === 'urgent') {
    className += ` ${css(styles.urgent)}`;
  }

  return (
    <li onClick={() => markAsRead && markAsRead(value)} className={className} dangerouslySetInnerHTML={html}></li>
  );
};

export default NotificationItem;
