import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell === null) {
      return <th colSpan="2">{textFirstCell}</th>;
    }
    return (
      <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </>
    );
  } else {
    return (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
