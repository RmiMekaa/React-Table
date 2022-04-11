import React from 'react'
import PropTypes from 'prop-types';

/**
 * Component for the search section
 * @param {Object} props
 * @param {String} props.searchString The search string
 * @param {Function} props.setSearchString Function to update searchString value
 * @returns {React.ReactElement} 
 */
export function TableSearch({ searchString, setSearchString }) {
  return (
    <div className='search'>
      <label>
        Search: {' '}
        <input type='search' value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      </label>
    </div>
  )
}

TableSearch.propTypes = {
  searchString: PropTypes.string,
  setSearchString: PropTypes.func,
}