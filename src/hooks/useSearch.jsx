import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

/**
 * Custom hook used to filter the array
 * @param {Array.<Object>} data globalData 
 * @param {String} searchString Search string from the input search
 * @returns {Array.<Object>} Filtered data
 */
export function useSearch(data, searchString) {
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (searchString === "" || searchString.length < 2) return setFilteredData(data);
    const filterData = data.filter(obj => Object.values(obj).some(val => val.toString().toLowerCase().includes(searchString.toLowerCase())));
    setFilteredData(filterData);
  }, [data, searchString]);

  return filteredData;
}

useSearch.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchString: PropTypes.string.isRequired,
}