interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(props.currentPage - 1, 1);
    let endPage = Math.min(props.currentPage + 1, props.totalPages);

    if (props.currentPage <= 2) {
      startPage = 1;
      endPage = Math.min(3, props.totalPages);
    } else if (props.currentPage >= props.totalPages - 1) {
      startPage = Math.max(props.totalPages - 2, 1);
      endPage = props.totalPages;
    }

    if (startPage > 1) {
      pageNumbers.push(
        <a
          key="ellipsis-left"
          className="relative inline-flex items-center px-4 py-2 text-sm text-gray-700 ring-1 ring-inset ring-gray-300"
        >
          ...
        </a>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <a
          key={i}
          href="#"
          onClick={() => props.handlePageChange(i)}
          className={`relative inline-flex items-center px-4 py-2 text-sm ${
            props.currentPage === i
              ? "z-10 bg-gray-500 text-white"
              : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          }`}
        >
          {i}
        </a>
      );
    }

    if (endPage < props.totalPages) {
      pageNumbers.push(
        <a
          key="ellipsis-right"
          className="relative inline-flex items-center px-4 py-2 text-sm text-gray-700 ring-1 ring-inset ring-gray-300"
        >
          ...
        </a>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between bg-white py-3 ">
      <div className="hidden sm:flex sm:flex-1 sm:items-center text-sm sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-semibold">
              {(props.currentPage - 1) * 10 + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              {Math.min(props.currentPage * 10, props.totalPages * 10)}
            </span>{" "}
            of <span className="font-semibold">{props.totalPages * 10}</span>{" "}
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={() => props.handlePageChange(1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
            >
              First
            </a>
            <a
              href="#"
              onClick={() =>
                props.handlePageChange(Math.max(1, props.currentPage - 1))
              }
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {renderPageNumbers()}
            <a
              href="#"
              onClick={() =>
                props.handlePageChange(
                  Math.min(props.totalPages, props.currentPage + 1)
                )
              }
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              onClick={() => props.handlePageChange(props.totalPages)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
            >
              Last
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
