import React from 'react'
import PropTypes from 'prop-types'

EntriesDisplayer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  orderedData: PropTypes.arrayOf(PropTypes.object).isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export function EntriesDisplayer({ currentPage, pageSize, orderedData, slice }) {
  return (
    <span>
      Showing {currentPage === 1 ? currentPage : ((currentPage - 1) * pageSize) + 1}
      -{((pageSize * currentPage) > orderedData.length)
        ? (currentPage * pageSize) - (pageSize - slice.length)
        : (currentPage * pageSize)
      }
      {' '} of {orderedData.length}{' '}
      entries
    </span>
  )
}