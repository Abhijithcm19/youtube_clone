import React from 'react';
import { Provider as ReactReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./store/"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactReduxProvider store={store}>
    <App />
    </ReactReduxProvider>
);


