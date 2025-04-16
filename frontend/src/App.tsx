import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import Navigation from './components/Navigation';

import GoalsListPage from './views/GoalsListPage';
import CompletedGoalsView from './views/CompletedGoalsView';
import TimelineView from './views/TimelineView';

import { BASENAME } from './constants';
import './index.scss'
import './App.css'
function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <BrowserRouter basename={BASENAME}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<GoalsListPage />} />
                    <Route path="/completed" element={<CompletedGoalsView />} />
                    <Route path="/timeline" element={<TimelineView />} />
                </Routes>
            </BrowserRouter>
        </LocalizationProvider >
    );
}

export default App;
