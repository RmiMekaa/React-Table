import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { TableHeader } from '../TableHeader.jsx/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import { TableFooter } from '../TableFooter/TableFooter';
import { useSearch } from '../../hooks/useSearch';
import { TableSearch } from '../TableSearch/TableSearch';
import { SelectPageSize } from '../SelectPageSize/SelectPageSize';
import { usePagination } from '../../hooks/usePagination.jsx';
import './ReactTable.css';
import { useOrdering } from '../../hooks/useOrdering';

ReactTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, //Any data
  headers: PropTypes.arrayOf(PropTypes.object), //Each object must have a name and a key which refers to the corresponding data property exemple: [{name: FirstName, key: firstName}]
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number), //Numbers of rows to display per page. Exemple: [25, 50, 100]
  displayEntries: PropTypes.bool, //Disable entries displayer feature by setting it to false
  allowSearch: PropTypes.bool, //Disable search feature by setting it to false
  selectPageSize: PropTypes.bool, //Disable select page size feature by setting it to false
}

/**
 * React table component
 * @param {object} props 
 * @component 
 */
export function ReactTable({ data, headers, pageSizeOptions=[25, 50, 100], displayEntries=true, allowSearch=true, selectPageSize=true }) {
  
  const [ordering, setOrdering] = useState(undefined)
  const [searchString, setSearchString] = useState("")
  const [pageSize, setPageSize] = useState(pageSizeOptions[0])
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useSearch(data, searchString);
  const orderedData = useOrdering(filteredData, ordering);
  const { slice, range } = usePagination(orderedData, currentPage, pageSize, ordering);

  return (
    <>
      <div className='tableInputs'>
        {selectPageSize && <SelectPageSize pageSize={pageSize} setPageSize={setPageSize} pageSizeOptions={pageSizeOptions} />}
        {allowSearch && <TableSearch searchString={searchString} setSearchString={setSearchString} />}
      </div>
      <div className='tableWrapper' style={{overflowX:'auto'}}>
        <table>
          <TableHeader headers={headers} ordering={ordering} setOrdering={setOrdering} />
          <TableBody data={slice} pageSize={pageSize} />
        </table>
      </div>
      {(orderedData.length === 0)
      ? <span style={{display: 'inline-block', padding: '2rem', textAlign: 'center', width: "100%"}}>No data found</span>
      : <TableFooter range={range} slice={slice} setCurrentPage={setCurrentPage} currentPage={currentPage} orderedData={orderedData} pageSize={pageSize} displayEntries={displayEntries} />}
    </>
  )
}