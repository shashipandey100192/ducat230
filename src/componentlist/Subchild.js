import React, { Fragment } from 'react'

function Subchild(props) {
    var b = localStorage.getItem('mydata');
  return (
    <Fragment>
    <div>Subchild:{props.mysubchil}</div>
        <h3>{b}</h3>
    </Fragment>
  )
}

export default Subchild