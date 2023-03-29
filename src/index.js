import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componentlist/About';
import Contactus from './componentlist/Contactus';
import Datalist from './componentlist/Datalist';
import Errorpage from './componentlist/Errorpage';
import Landingpage from './componentlist/Landingpage';
import Myaxiosdatalist from './componentlist/Myaxiosdatalist';
import Mynav from './componentlist/Mynav';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <BrowserRouter>
    <Mynav></Mynav>
        <Routes>
           <Route path='' element={<Landingpage/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contactus/>}/>
           <Route path='*' element={<Errorpage/>}/>
           <Route path='datalist' element={<Datalist/>}/>
           <Route path='myapidata' element={<Myaxiosdatalist/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
