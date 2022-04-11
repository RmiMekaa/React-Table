import React from 'react'
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {Number} props.pageSize Page size
 * @param {Function} props.setPageSize Function to update pageSize value
 * @param {Array.<Number>} props.pageSizeOptions Provide options for the page size. Example: [25, 50, 100]
 * @returns {React.ReactElement} 
 */
export function SelectPageSize({ pageSize, setPageSize, pageSizeOptions }) {
  return (
    <div className='selectPageSize'>
      <label>
        Show{' '}
        <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))}>
          {pageSizeOptions.map(option => <option key={option}>{option}</option>)}
        </select>
        {' '}Entries
      </label>
    </div>
  )
}

SelectPageSize.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  pageSizeOptions: PropTypes.array,
}