import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationBarProps {
    pageCount: number;
    page: number;
    total: number;
    pageChange: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationBar = ({ pageCount, page, total, pageChange }: PaginationBarProps) => (
    <>
        <Stack spacing={2}  style={{width:'90%'}}>
            <Pagination count={pageCount} page={page} variant="outlined" shape="rounded" onChange={pageChange}/>
        </Stack>
        <div  style={{width:'90%'}}>
            {`Page: ${page} of: ${pageCount}, total ${total}`}
        </div>
    </>
);

export default PaginationBar;
