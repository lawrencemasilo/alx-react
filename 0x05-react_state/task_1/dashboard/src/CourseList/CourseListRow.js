import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  headerCell: {
    border: '1px solid black',
    fontWeight: 'bold',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyles = isHeader ? styles.headerRow : styles.row;
  const cellStyles = isHeader ? styles.headerCell : '';

  return (
    <tr className={css(rowStyles)}>
      {textSecondCell ? (
        <>
          <th className={css(cellStyles)}>{textFirstCell}</th>
          <th className={css(cellStyles)}>{textSecondCell}</th>
        </>
      ) : (
        <th className={css(cellStyles)} colSpan={2}>{textFirstCell}</th>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
