import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GamesListPage from './views/GamesListPage';

import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GamesListPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
