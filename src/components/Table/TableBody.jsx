import React from 'react'
import PropTypes from 'prop-types';

TableBody.propTypes = {
  slice: PropTypes.array,
  pageSize: PropTypes.number,
  searchString: PropTypes.string,
}

/**
 * Table body component
 * @param {Object} props
 * @param {Object[]} props.slice Data to display in the body
 * @component 
 */
export function TableBody({ slice }) {
  let key = 0;
  return (
    <tbody>
      {slice.map(object => {
        key++;
        return (
          <tr key={"TableRow" + key}>
            {Object.values(object).map(value => {
              return <td key={"TableData" + key++}>{value}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
