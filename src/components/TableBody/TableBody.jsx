import React from 'react'
import PropTypes from 'prop-types';

TableBody.propTypes = {
  data: PropTypes.array,
  pageSize: PropTypes.number,
  searchString: PropTypes.string,
}

/**
 * Table body component
 * @param {Object} props
 * @param {Object[]} props.data Data to display in the body
 * @component 
 */
export function TableBody({ data }) {
  let key = 0;
  return (
    <tbody>
      {data.map(object => {
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
