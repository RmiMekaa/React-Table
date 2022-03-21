import React from 'react'
import PropTypes from 'prop-types'

Pagination.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export function Pagination({range, currentPage, setCurrentPage}) {
  return (
    <div className='pagination'>
      <button 
        className="tableFooter__btn" 
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {range.map((pageNumber, index) => (
        <button
          key={index}
          className={currentPage === pageNumber ? "tableFooter__btn tableFooter__btn--active" : 'tableFooter__btn'}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="tableFooter__btn"
        disabled={currentPage === range.length ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}