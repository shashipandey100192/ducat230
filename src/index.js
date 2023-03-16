import React from 'react';
import ReactDOM from 'react-dom/client';
import Home1, { About10 } from './componentlist/Home';
import { About } from './componentlist/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home1 />
    <About />
    <About10 />
  </React.StrictMode>
);
