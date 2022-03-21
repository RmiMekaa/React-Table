import React from 'react'
import PropTypes from 'prop-types';
import './TableHeader.css';

TableHeader.propTypes = {
  headers: PropTypes.array,
  ordering: PropTypes.object,
  setOrdering: PropTypes.func,
}

/**
 * Table header component
 * @param {Object} props
 * @param {Object[]} props.headers Array containg the headers
 * @param {Object} props.ordering Ordering state
 * @param {function} props.setOrdering Function to update ordering
 * @component 
 */
export function TableHeader({ headers, ordering, setOrdering }) {
  return (
    <thead>
      <tr>
        {headers.map(header => {
          return (
            <th key={header.key} onClick={() => handleOrdering(header.key, ordering, setOrdering)}>
              <div className="th-content">
                {header.name}
                <span className='sortIcons'>
                  <button className={(ordering && ordering.property === header.key && ordering.order === "ascending") ? "sortIcon--active" : null }>▲</button>
                  <button className={(ordering && ordering.property === header.key && ordering.order === "descending") ? "sortIcon--active" : null }>▼</button>
                </span>
              </div>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

function handleOrdering(key, ordering, setOrdering) {
  let newOrder;
  //Si la colonne est déjà triée
  if (ordering && ordering.property === key) {
    newOrder = (ordering.order === 'ascending')
      ? { order: 'descending', property: key }
      : { order: 'ascending', property: key }
  }
  //Si la colonne n'est pas déjà triée
  else newOrder = { order: 'ascending', property: key }
  setOrdering(newOrder)
}