import React from "react";
import { SelectPageSize } from "./SelectPageSize.jsx";
import { TableSearch } from "./TableSearch.jsx";

/**
 * Component rendering the Features section
 * @param {object} props 
 * @component 
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