import React, { useState } from 'react'
import axios, { Axios } from 'axios';

function Myaxiosdatalist() {
const [apivariale, apifunction]=useState([]);

const myapi = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        console.log(res.data);
        apifunction(res.data);
    })
}

  return (
    <div>
        <button type='button' onClick={myapi}>api data</button>
        <div className='container'>
            <div className='row'>
            {apivariale.map((a)=>{
                return(
                        <div className='col-md-6'>
                            <section className='border m-1 p-2'>
                                <h1>{a.id}</h1>
                                <h3>{a.userId}</h3>
                                <h5>{a.title}</h5>
                                <p>{a.body}</p>
                            </section>
                        </div>
                        )
                    })}

                
            </div>
        </div>
    </div>
  )
}

export default Myaxiosdatalist