import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// // I think this is the older, deprecated approach vs using createRoot above.
// ReactDom.render(<App />, document.getElementById('root'));
