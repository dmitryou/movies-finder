import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate the range of pages to display
  const pagesToShow = 5; // Total pages to show (3 before + 1 current + 1 after)
  let startPage = Math.max(1, currentPage - 3); // Ensure we don't go below page 1
  let endPage = Math.min(totalPages, currentPage + 2); // Ensure we don't go beyond total pages

  // If there are not enough pages before the current page, adjust the start and end
  if (currentPage <= 3) {
    startPage = 1;
    endPage = Math.min(pagesToShow, totalPages);
  } else if (currentPage + 2 > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - pagesToShow + 1);
  }

  // Create an array of page numbers to display
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <ul className="hl-pagination mt-5">
      {pageNumbers.map((page) => (
        <li className="hl-pagination--item" key={page}>
          <button
            className={`hl-pagination--button ${
              page === currentPage ? "current" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page.toString().padStart(2, "0")}
          </button>
        </li>
      ))}

      <li className="hl-pagination--item">
        <button
          className="hl-pagination--button"
          onClick={() => {
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.49 0.196115C18.2638 1.3274 18.3963 3.13433 19.5707 4.7971C20.7361 6.44723 22.973 8.01774 27.0705 8.60308L27 9.09638V9.0997L27.0705 9.59299C22.973 10.1783 20.7361 11.7488 19.5707 13.399C18.3963 15.0617 18.2638 16.8687 18.49 18L17.5095 18.1961C17.2357 16.8274 17.4033 14.7343 18.7539 12.8221C19.6399 11.5675 21.016 10.4172 23.0581 9.59804H0V8.59804H23.0581C21.016 7.77883 19.6399 6.62854 18.7539 5.37401C17.4033 3.46179 17.2357 1.36872 17.5095 0L18.49 0.196115Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
