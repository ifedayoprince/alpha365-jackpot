import React from 'react';
import ReactDOM from 'react-dom/client';

import 'material-icons/iconfont/material-icons.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import Rules from './pages/Rules';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/rules' element={<Rules />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)