import React, { useEffect } from "react";
import { EntriesDisplayer } from "./EntriesDisplayer.jsx";
import { Pagination } from "./Pagination.jsx";
import PropTypes from 'prop-types'

Footer.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderedData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number.isRequired,
  displayEntries: PropTypes.bool,
}

export function Footer({ range, setCurrentPage, currentPage, slice, orderedData, pageSize, displayEntries = true }) {

  useEffect(() => {
    if (slice.length === 0 && currentPage !== 1) setCurrentPage(1);
  }, [slice, currentPage, setCurrentPage]);

  return (
    <div className="footer">
      {displayEntries && <EntriesDisplayer currentPage={currentPage} pageSize={pageSize} orderedData={orderedData} slice={slice} />}
      {range.length > 1 && <Pagination range={range} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
};