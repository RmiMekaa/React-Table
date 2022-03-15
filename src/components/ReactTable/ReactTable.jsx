import React, { useState, useMemo } from 'react'
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
  headers: PropTypes.array,
  data: PropTypes.array.isRequired,
}

export function ReactTable({ headers, data, options }) {
  const pageSizeOptions = options ? options : [25, 50, 100]
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
        <SelectPageSize pageSize={pageSize} setPageSize={setPageSize} pageSizeOptions={pageSizeOptions} />
        <TableSearch searchString={searchString} setSearchString={setSearchString} />
      </div>
      <table>
        <TableHeader headers={headers} ordering={ordering} setOrdering={setOrdering} />
        <TableBody data={slice} pageSize={pageSize} />
      </table>
      <TableFooter range={range} slice={slice} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}