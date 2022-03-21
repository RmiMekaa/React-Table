import React from 'react'
import './SelectPageSize.css'
import PropTypes from 'prop-types';

SelectPageSize.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  pageSizeOptions: PropTypes.array,
}

export function SelectPageSize({ pageSize, setPageSize, pageSizeOptions }) {
  return (
    <label className="selectPageSize">
      Show{' '}
      <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))}>
        {pageSizeOptions.map(option => <option key={option}>{option}</option>)}
      </select>
      {' '}Entries   
    </label>
  )
}