import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const handlePaginate = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <nav aria-label="Page navigation">
      <div className="pagination justify-content-center">
        <button
          onClick={() => handlePaginate(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePaginate(pageNumber)}
              disabled={pageNumber === currentPage}>
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={() => handlePaginate(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
