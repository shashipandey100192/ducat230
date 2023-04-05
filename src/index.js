import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componentlist/About';
import Contactus from './componentlist/Contactus';
import Datalist from './componentlist/Datalist';
import Errorpage from './componentlist/Errorpage';
import Landingpage from './componentlist/Landingpage';
import Myaxiosdatalist from './componentlist/Myaxiosdatalist';
import Mycharts from './componentlist/Mychart';
import Mynav from './componentlist/Mynav';
import Detailspage from './componentlist/Detailspage';
import Mybootstrapform from './componentlist/Mybootstrapform';
import Myparents from './componentlist/Myparents';




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
           <Route path='myapidata/:id' element={<Detailspage/>}/>
           <Route path='graph' element={<Mycharts/>}/>
           <Route path="myform" element={<Mybootstrapform/>}/>
           <Route path="myprops" element={<Myparents/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
