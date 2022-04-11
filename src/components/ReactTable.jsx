import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useSearch } from '../hooks/useSearch.jsx';
import { usePagination } from '../hooks/usePagination.jsx';
import { useOrdering } from '../hooks/useOrdering.jsx';
import { Header } from './Header/Header.jsx';
import { Table } from './Table/Table.jsx';
import { Footer } from './Footer/Footer.jsx';
import '../style/style.css';

/**
 * React table main component
 * @param {object} props 
 * @param {Array.<object>} props.data Any data.
 * @param {Array.<object>} props.headers Each object must have two properties : a name to display and a key which refers to the corresponding data property exemple: [{name: First Name, key: firstName}]
 * @param {Array.<number>} [props.pageSizeOptions] An array providing options to configure the number of rows per page. Exemple: [25, 50, 100]
 * @param {boolean} [props.displayEntries] Disable entries displayer by setting it to false
 * @param {boolean} [props.allowSearch] Disable search input by setting it to false
 * @param {boolean} [props.selectPageSize] Disable select input by setting it to false
 * @returns {React.ReactElement} 
 */
export default function ReactTable({
  data,
  headers,
  pageSizeOptions,
  displayEntries,
  allowSearch,
  selectPageSize,
}) {

  const [ordering, setOrdering] = useState(undefined)
  const [searchString, setSearchString] = useState("")
  const [pageSize, setPageSize] = useState(pageSizeOptions[0])
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useSearch(data, searchString);
  const orderedData = useOrdering(filteredData, ordering);
  const { slice, range } = usePagination(orderedData, currentPage, pageSize, ordering);

  return (
    <div className='mainContainer'>
      <Header {...{ selectPageSize, pageSize, setPageSize, pageSizeOptions, searchString, setSearchString, allowSearch }} />
      <Table {...{ headers, slice, ordering, setOrdering }} />
      {(orderedData.length === 0)
        ? <span className='noDataMsg'>
          {data.length === 0 ? "No data" : "No data found for \"" + searchString + "\""}
        </span>
        : <Footer {...{ range, slice, setCurrentPage, currentPage, filteredData, pageSize, displayEntries }} />}
    </div>
  )
}

ReactTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  displayEntries: PropTypes.bool,
  allowSearch: PropTypes.bool,
  selectPageSize: PropTypes.bool
}

ReactTable.defaultProps = {
  pageSizeOptions: [10, 25, 50, 100],
  displayEntries: true,
  allowSearch: true,
  selectPageSize: true
};