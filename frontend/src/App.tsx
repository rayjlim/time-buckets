import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import GoalsListPage from './views/GoalsListPage';
import CompletedGoalsView from './views/CompletedGoalsView';
import { BASENAME } from './constants';

function App() {
    return (
        <BrowserRouter basename={BASENAME}>
            <Navigation />
            <Routes>
                <Route path="/" element={<GoalsListPage />} />
                <Route path="/completed" element={<CompletedGoalsView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
