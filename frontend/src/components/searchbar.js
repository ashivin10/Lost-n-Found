import React from 'react'
import './searchbar.css'
function searchbar() {
  return (
    <>
    <div className="container mt-8">

<div className="row height d-flex justify-content-center align-items-center">

  <div className="col-md-8">

    <div className="search">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control" placeholder="Lost Something?"/>
      <button className="btn btn-primary">Search</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default searchbar