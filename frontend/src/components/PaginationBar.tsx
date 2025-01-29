import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationBarProps {
    pageCount: number;
    page: number;
    pageChange: (e: any, page: number) => void;
}

const PaginationBar = ({ pageCount, page, pageChange }: PaginationBarProps) => (
    <>
        <Stack spacing={2}>
            <Pagination count={pageCount} page={page} variant="outlined" shape="rounded" onChange={pageChange}/>

        </Stack>
        <p>Current Page: {page}</p>
        <div>
            {`page: ${page} total: ${pageCount}`}
        </div>
    </>
);

export default PaginationBar;
