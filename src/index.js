
import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newlanding from './pages/Newlanding';
import Myreactbootstrap from './pages/Myreactbootstrap';

const Newabout = lazy(()=> import('./pages/Newabout'));





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Newlanding/>}/>
      <Route path='about' element={<Suspense fallback={<div style={{color:'red'}}>Loadingeeeeeeeeeeeeeeeeeee...</div>}>
          <Newabout/>
      </Suspense>}></Route>
      <Route path='reactbootstrap' element={<Myreactbootstrap/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
