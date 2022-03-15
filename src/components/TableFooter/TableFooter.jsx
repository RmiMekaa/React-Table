import React, { useEffect } from "react";
import "./TableFooter.css";

export function TableFooter({ range, setCurrentPage, currentPage, slice }) {

  useEffect(() => {
    if (slice.length < 1 && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [slice, currentPage, setCurrentPage]);

  return (
    <div className="tableFooter">
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