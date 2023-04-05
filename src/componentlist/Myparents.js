import React from 'react';
import Mychilds from './Mychilds';
import "./style.css";

function Myparents() {
  var a = "ducat india";
  localStorage.setItem("mydata",a);

  return (
    <div className='one'>
      <h1>this is parent element {a}</h1>
      <Mychilds mykey="education" myver={a}></Mychilds>
        
    </div>
  )
}

export default Myparents