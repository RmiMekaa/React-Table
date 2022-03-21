import React, { useEffect } from "react";
import { EntriesDisplayer } from "../EntriesDisplayer/EntriesDisplayer";
import { Pagination } from "../Pagination/Pagination";
import PropTypes from 'prop-types'
import "./TableFooter.css";

TableFooter.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderedData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number.isRequired,
  displayEntries: PropTypes.bool,
}

export function TableFooter({ range, setCurrentPage, currentPage, slice, orderedData, pageSize, displayEntries=true }) {

  useEffect(() => {
    if (slice.length === 0 && currentPage !== 1) setCurrentPage(1);
  }, [slice, currentPage, setCurrentPage]);

  return (
    <div className="tableFooter">
      {displayEntries && <EntriesDisplayer currentPage={currentPage} pageSize={pageSize} orderedData={orderedData} slice={slice} />}
      {range.length > 1 && <Pagination range={range} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
};