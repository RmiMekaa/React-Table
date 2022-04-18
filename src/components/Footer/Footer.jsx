import React, { useEffect } from "react";
import { EntriesDisplayer } from "./EntriesDisplayer.jsx";
import { Pagination } from "./Pagination.jsx";
import PropTypes from 'prop-types'

/**
 * Component for the footer section
 * @param {Object} props 
 * @param {Array.<Number>} props.range Table range
 * @param {Function} props.setCurrentPage Function to update currentPage value
 * @param {Number} props.currentPage Current page number
 * @param {Array.<Object>} props.slice The slice of data displayed in the table
 * @param {Array.<Object>} props.filteredData The filtered data
 * @param {Number} props.pageSize Page size
 * @param {Boolean} props.displayEntries Control if the entries counter should be displayed or not
 * @returns {React.ReactElement} 
 */
export function Footer({ range, setCurrentPage, currentPage, slice, filteredData, pageSize, displayEntries }) {

  useEffect(() => {
    if (slice.length === 0 && currentPage !== 1) setCurrentPage(1);
  }, [slice, currentPage, setCurrentPage]);

  return (
    <div className="tableFooter">
      {displayEntries && <EntriesDisplayer {...{ currentPage, slice, filteredData, pageSize }} />}
      {range.length > 1 && <Pagination {...{ range, currentPage, setCurrentPage }} />}
    </div>
  );
}

Footer.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number.isRequired,
  displayEntries: PropTypes.bool,
}

Footer.defaultProps = {
  displayEntries: true
}