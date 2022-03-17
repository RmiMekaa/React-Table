import React, { useEffect } from "react";
import "./TableFooter.css";

export function TableFooter({ range, setCurrentPage, currentPage, slice, orderedData, pageSize }) {

  useEffect(() => {
    if (slice.length < 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [slice, currentPage, setCurrentPage]);

  if ((pageSize * currentPage) > orderedData.length) console.log((currentPage * pageSize)-(pageSize - slice.length));

  return (
    <div className="tableFooter">
      <span>
        Showing {currentPage === 1 ? currentPage : ((currentPage-1) * pageSize) + 1} 
        -{((pageSize * currentPage) > orderedData.length)
        ? (currentPage * pageSize)-(pageSize - slice.length) 
        : (currentPage * pageSize)
        }
        {' '} of {orderedData.length}{' '}
        entries
      </span>

      <button 
        className="tableFooter__btn" 
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {range.map((pageNumber, index) => (
        <button
          key={index}
          className={currentPage === pageNumber ? "tableFooter__btn tableFooter__btn--active" : 'tableFooter__btn'}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="tableFooter__btn"
        disabled={currentPage === range.length ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};