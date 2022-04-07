import React from 'react'

/**
 * Component for the search section
 * @param {Object} props
 * @param {String} props.searchString 
 * @param {Function} props.setSearchString 
 * @component
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

