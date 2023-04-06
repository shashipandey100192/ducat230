import React, { useEffect } from 'react'

function MysHooks() {


const abc = ()=>{
    console.log("hi hooks");
}

// abc();

useEffect((a,b,c)=>{
    abc();
    
});


  return (
    <div>MysHooks</div>
  )
}

export default MysHooks