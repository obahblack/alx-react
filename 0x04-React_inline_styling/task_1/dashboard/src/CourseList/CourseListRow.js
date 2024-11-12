import React from "react";
import PropTypes, { string } from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const headerStyle = { backgroundColor: "#f5f5f5ab" };
  const rowStyle = { backgroundColor: "#deb5b545"};
  const ChooseStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={ChooseStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

// Validating prop types
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

// Creating default props
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
