import React, { useState } from 'react'

function Contactus() {
  const [x,y]=useState(40);

const mynumber= (r)=>{
  // console.log(r);
  y(r.target.value);
}

  return (
    <div>Contactus
      <input type="number" onInput={mynumber}/>
 <h1>{x}</h1>


    </div>
  )
}

export default Contactus



export function Abc()
{
  return(
    <h1>this is name export function</h1>
  )
}