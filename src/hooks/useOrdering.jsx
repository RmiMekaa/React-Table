import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

/**
 * Custom hook used to sort the data
 * @param {Array.<object>} data Data to sort
 * @param {Object} ordering Example: { order: "ascending", property: "firstName" } 
 * @returns {Array.<object>} Sorted data
 */
export function useOrdering(data, ordering) {
  const [orderedData, setOrderedData] = useState(data)

  useEffect(() => {
    if (!ordering) return setOrderedData(data);
    setOrderedData(sortData(data, ordering))
  }, [orderedData, data, ordering]);

  return orderedData;
}

/**
 * Sort the data
 * @param {Array.<Object>} data The data to sort
 * @param {Object} ordering The ordering config. Example: { order: "ascending", property: "firstName" }
 * @returns {Array}
 */
function sortData(data, ordering) {
  return (ordering.order === 'ascending')
    ? data.sort((a, b) => (a[ordering.property] > b[ordering.property]) ? 1 : -1)
    : data.sort((a, b) => (a[ordering.property] > b[ordering.property]) ? -1 : 1)
}

useOrdering.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  ordering: PropTypes.object,
}