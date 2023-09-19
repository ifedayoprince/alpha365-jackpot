import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Redux Provider
import store from './store'; // Import your Redux store
import 'material-icons/iconfont/material-icons.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';
import Rules from './pages/Rules;'

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/rules' elements={<Rules />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>);
