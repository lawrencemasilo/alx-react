import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type, html, value }) => {
  return (
    <li data-priority={type} dangerouslySetInnerHTML={html ? html : { __html: value }} />
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  html: null,
  value: '',
};

export default NotificationItem;
