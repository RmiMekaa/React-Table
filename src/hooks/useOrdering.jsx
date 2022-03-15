import { useState, useEffect } from 'react';

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