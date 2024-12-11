import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GoalsListPage from './views/GoalsListPage';

import './App.css';

const App = () => (
  <div id="container">
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GoalsListPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
