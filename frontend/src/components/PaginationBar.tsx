import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationBar = ({ pageCount, pageChange }: { pageCount: number, pageChange: any }) => (
    <Stack spacing={2}>
        <Pagination count={pageCount} variant="outlined" shape="rounded" />
        <button onClick={pageChange}>test</button>
    </Stack>
    //   <nav aria-label="Page navigation" className="mt-4">
    //     <ReactPaginate
    //       containerClassName="pagination justify-content-center"
    //       breakClassName="page-item"
    //       breakLinkClassName="page-link"
    //       pageClassName="page-item"
    //       pageLinkClassName="page-link"
    //       previousClassName="page-item"
    //       previousLinkClassName="page-link"
    //       nextClassName="page-item"
    //       nextLinkClassName="page-link"
    //       activeClassName="active"
    //       onPageChange={pageChange}
    //       pageRangeDisplayed={4}
    //       pageCount={pageCount}
    //       previousLabel="< previous"
    //       breakLabel="..."
    //       nextLabel="next >"
    //       renderOnZeroPageCount={null}
    //     />
    //   </nav>
);

export default PaginationBar;
