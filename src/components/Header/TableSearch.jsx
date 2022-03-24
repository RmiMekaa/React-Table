import React from 'react'

/**
 * @param {Object} props
 * @param {String} props.searchString 
 * @param {Function} props.setSearchString 
 * @returns 
 */
export function TableSearch({ searchString, setSearchString }) {
  return (
    <label>
      Search: {' '}
      <input type='search' value={searchString} onChange={(e) => setSearchString(e.target.value)} />
    </label>
  )
}
