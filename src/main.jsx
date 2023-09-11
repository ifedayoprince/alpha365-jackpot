import React from 'react';
import ReactDOM from 'react-dom/client';

import 'material-icons/iconfont/material-icons.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Minor from './pages/Minor';


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Minor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)