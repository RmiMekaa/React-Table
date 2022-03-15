import { useState, useEffect } from "react";

export function usePagination(data, currentPage, pageSize, ordering) {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, pageSize);
    setTableRange([...range]);

    const slice = sliceData(data, currentPage, pageSize);
    setSlice([...slice]);
  }, [data, setTableRange, currentPage, setSlice, pageSize, ordering]);

  return { slice, range: tableRange };
};

function calculateRange(data, pageSize) {
  const range = [];
  const num = Math.ceil(data.length / pageSize);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

function sliceData(data, currentPage, pageSize) {
  return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
};