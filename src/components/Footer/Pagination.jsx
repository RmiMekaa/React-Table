import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component for the pagination section
 * @param {Object} props 
 * @param {Array.<Number>} props.range Table range
 * @param {Function} props.setCurrentPage Function to update currentPage value
 * @param {Number} props.currentPage Current page number
 * @returns {React.ReactElement} 
 */
export function Pagination({ range, currentPage, setCurrentPage }) {
  return (
    <div className='pagination'>
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {range.map((pageNumber, index) => (
        <button
          key={index}
          className={currentPage === pageNumber ? "currentPage" : null}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={currentPage === range.length ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

Pagination.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}