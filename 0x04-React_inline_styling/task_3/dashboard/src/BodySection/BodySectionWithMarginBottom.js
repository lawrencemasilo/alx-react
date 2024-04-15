import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

const BodySectionWithMarginBottom = ({ children }) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      {children}
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;