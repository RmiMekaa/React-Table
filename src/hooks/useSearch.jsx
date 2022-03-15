import { useState, useEffect } from 'react';

export function useSearch(data, searchString) {
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (searchString === "" || searchString.length < 2) return setFilteredData(data);
    const filterData = data.filter(obj => Object.values(obj).some(val => val.toString().toLowerCase().includes(searchString.toLowerCase())));
    setFilteredData(filterData);
  }, [data, searchString]);

  return filteredData;
}