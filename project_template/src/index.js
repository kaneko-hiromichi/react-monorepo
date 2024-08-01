// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 18以降ではcreateRootを使用してroot要素にレンダリング
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
