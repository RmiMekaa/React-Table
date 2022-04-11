import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component for the entries counter
 * @param {Object} props Current page number
 * @param {Number} props.currentPage Current page number
 * @param {Number} props.pageSize Page size
 * @param {Array.<Object>} props.filteredData filtered Data
 * @param {Array.<Object>} props.slice Data slice displayed in the table
 * @returns {React.ReactElement} 
 */
export function EntriesDisplayer({ currentPage, pageSize, filteredData, slice }) {
  return (
    <span className='entriesDisplayer'>
      Showing {currentPage === 1 ? currentPage : ((currentPage - 1) * pageSize) + 1}
      -{((pageSize * currentPage) > filteredData.length)
        ? (currentPage * pageSize) - (pageSize - slice.length)
        : (currentPage * pageSize)
      }
      {' '} of {filteredData.length}{' '}
      entries
    </span>
  )
}

EntriesDisplayer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  orderedData: PropTypes.arrayOf(PropTypes.object).isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
}