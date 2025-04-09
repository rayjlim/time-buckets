import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import GoalsListPage from './views/GoalsListPage';
import CompletedGoalsView from './views/CompletedGoalsView';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<GoalsListPage />} />
                <Route path="/completed" element={<CompletedGoalsView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
