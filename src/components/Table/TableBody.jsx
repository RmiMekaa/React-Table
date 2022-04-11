import React from 'react'
import PropTypes from 'prop-types';


/**
 * Table body component
 * @param {Object} props
 * @param {Array.<Object>} props.slice A slice of data to display in the data
 * @returns {React.ReactElement}
 */
export function TableBody({ slice }) {
  let key = 0;
  let i = 0;
  return (
    <tbody style={{ "minHeight": (slice.length * 3) + "rem" }}>
      {slice.map(object => {
        key++;
        i++;
        return (
          <tr className={"table-tr " + "table-tr-" + i} key={"TableRow" + key}>
            {Object.values(object).map(value => {
              return <td className={"table-td"} key={"TableData" + key++}>{value}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  slice: PropTypes.arrayOf(PropTypes.object).isRequired,
}