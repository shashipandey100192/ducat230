import React from 'react';
import "./style.css";
import Subchild from './Subchild';

function Mychilds(props) {
  return (
    <div className='two'>
        <h2>Mychilds {props.mykey} {props.myver}</h2>
        
      {/* <Subchild mysubchil={'pppppppppppppppp'}></Subchild> */}
      <Subchild mysubchil={props.myver}></Subchild>
      </div>
  )
}

export default Mychilds