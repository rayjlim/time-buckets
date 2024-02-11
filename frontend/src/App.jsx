import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GamesListPage from './views/GamesListPage';

import './App.css';

const App = () => (
  <div id="container">
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GamesListPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
