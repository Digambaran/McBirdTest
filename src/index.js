import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { configureFakeBackend } from '@helpers';
configureFakeBackend();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
