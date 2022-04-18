import React from "react";
import { TableHeader } from "./TableHeader.jsx";
import { TableBody } from "./TableBody.jsx";
import PropTypes from 'prop-types';

/**
 * Component for the table
 * @param {Object} props 
 * @param {Array.<Object>} props.headers Headers to config the table th
 * @param {Array.<Object>} props.slice A slice of data to display in the table
 * @param {Object} props.ordering Ordering state
 * @param {Function} props.setOrdering Function to update ordering
 * @returns {React.ReactElement} 
 */
export function Table({ headers, slice, ordering, setOrdering }) {
  return (
    <div className='table'>
      <table aria-label='data table'>
        <TableHeader {...{ headers, ordering, setOrdering }} />
        <TableBody {...{ slice }} />
      </table>
    </div>
  )
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
  ordering: PropTypes.object,
  setOrdering: PropTypes.func,
  description: PropTypes.string,
}