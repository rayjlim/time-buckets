import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GamesList from './views/GamesListPage';

import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamesList />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
