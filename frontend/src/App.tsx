import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import GoalsListPage from './views/GoalsListPage'

import './index.scss'
import './App.css'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <GoalsListPage />
        </LocalizationProvider >
    )
}

export default App
