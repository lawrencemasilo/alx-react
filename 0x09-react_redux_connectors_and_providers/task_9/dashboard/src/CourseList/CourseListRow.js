import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(isChecked ? styles.rowChecked : styles.row)}>
      <td>
        {isHeader ? (
          <b>{textFirstCell}</b>
        ) : (
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        )}
      </td>
      <td>
        {isHeader ? (
          <b>{textSecondCell}</b>
        ) : (
          <span>{textSecondCell}</span>
        )}
      </td>
    </tr>
  );
};

export default CourseListRow;
