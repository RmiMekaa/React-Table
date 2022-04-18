import React from "react";
import { SelectPageSize } from "./SelectPageSize.jsx";
import { TableSearch } from "./TableSearch.jsx";
import PropTypes from 'prop-types'

/**
 * Component for the header section
 * @param {Object} props 
 * @param {Boolean} props.selectPageSize Control if the page size selector should be displayed or not
 * @param {Number} props.pageSize Page size
 * @param {Function} props.setPageSize Function to update pageSize value
 * @param {Array.<Number>} props.pageSizeOptions Provide options for the page size. Example: [25, 50, 100]
 * @param {String} props.searchString The search string from input search
 * @param {Function} props.setSearchString Function to update searchString value
 * @param {Boolean} props.allowSearch Control if the search section should be displayed or not
 * @returns {React.ReactElement} 
 */
export function Header({ selectPageSize, pageSize, setPageSize, pageSizeOptions, searchString, setSearchString, allowSearch }) {
  return (
    (allowSearch || selectPageSize)
      ? (
        <div className="tableHeader">
          {(selectPageSize && pageSizeOptions.length > 1) && <SelectPageSize {...{ pageSize, setPageSize, pageSizeOptions }} />}
          {allowSearch && <TableSearch {...{ searchString, setSearchString }} />}
        </div>
      ) : null
  )
}

Header.propTypes = {
  selectPageSize: PropTypes.bool,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  pageSizeOptions: PropTypes.array,
  searchString: PropTypes.string,
  setSearchString: PropTypes.func,
  allowSearch: PropTypes.bool,
}