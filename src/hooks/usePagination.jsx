import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

/**
 * Custom hook used for pagination
 * @param {Array.<Object>} data Data
 * @param {Number} currentPage Current page number
 * @param {Number} pageSize Page size
 * @param {Object} ordering Example: { order: "ascending", property: "firstName" } 
 * @returns {Object} Object containing a data slice and the table range
 */
export function usePagination(data, currentPage, pageSize, ordering) {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, pageSize);
    setTableRange([...range]);

    const calculatedSlice = sliceData(data, currentPage, pageSize);
    setSlice([...calculatedSlice]);
  }, [data, setTableRange, currentPage, setSlice, pageSize, ordering]);

  return { slice, range: tableRange };
}

/**
 * Calculate the range of the table
 * @param {Array.<Object>} data Global Data
 * @param {Number} pageSize Page size
 * @returns {Array} An array containing page numbers
 */
function calculateRange(data, pageSize) {
  const range = [];
  const num = Math.ceil(data.length / pageSize);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
}

/**
 * Calculate the slice of data to display
 * @param {Array.<Object>} data Global data
 * @param {Number} currentPage The current Page Number
 * @param {Number} pageSize The Page size
 * @returns {Array} A slice of data
 */
function sliceData(data, currentPage, pageSize) {
  return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

usePagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  ordering: PropTypes.object.isRequired,
}