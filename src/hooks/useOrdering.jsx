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
    (ordering.order === 'ascending')
      ? setOrderedData(data.sort((a, b) => (a[ordering.property] > b[ordering.property]) ? 1 : -1))
      : setOrderedData(data.sort((a, b) => (a[ordering.property] > b[ordering.property]) ? -1 : 1))
  }, [orderedData, data, ordering]);

  return orderedData;
}

useOrdering.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  ordering: PropTypes.object,
}