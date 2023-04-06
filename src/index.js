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
import { Auth0Provider } from '@auth0/auth0-react';
import Myauthloginpage from './componentlist/Myauthlogin';
import MysHooks from './componentlist/MysHooks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Auth0Provider  
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="yX16UCL8NWJ3WbEbMMBUDw4cglKkJysw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
    <Mynav></Mynav>
        <Routes>
           {/* <Route path='' element={<Landingpage/>}/> */}
           <Route path='' element={<Myauthloginpage/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contactus/>}/>
           <Route path='*' element={<Errorpage/>}/>
           <Route path='datalist' element={<Datalist/>}/>
           <Route path='myapidata' element={<Myaxiosdatalist/>}/>
           <Route path='myapidata/:id' element={<Detailspage/>}/>
           <Route path='graph' element={<Mycharts/>}/>
           <Route path="myform" element={<Mybootstrapform/>}/>
           <Route path="myprops" element={<Myparents/>}/>
           <Route path="myhook" element={<MysHooks/>}/>
        </Routes>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
