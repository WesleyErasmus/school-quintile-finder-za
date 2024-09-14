interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {

  return (
    <>
      <button onClick={() => props.handlePageChange(props.currentPage - 1)} type="button" disabled={props.currentPage === 1}>
        Previous
      </button>
     <span>Page {props.currentPage} of {props.totalPages}</span>
      <button onClick={() => props.handlePageChange(props.currentPage + 1)} type="button" disabled={props.currentPage === props.totalPages}>
        Next
      </button>
    </>
  );
};

export default Pagination;
