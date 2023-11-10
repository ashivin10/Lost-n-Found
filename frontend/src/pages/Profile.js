import React from 'react'
import './Profile.css'
import Navbar from '../components/navbar'
function Profile() {

    const firstname = localStorage.getItem("user");
    const lastname = localStorage.getItem("last");
    const email = localStorage.getItem("email");

  return (<>
  <Navbar/>
  <div className="d-flex justify-content-center align-items-center">

    <div className="container mt-5 mb-3 p-3 d-flex justify-content-center">
         <div className="card p-4"> 
         <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzqIZuh9L1JjZ2B9_WOjGtRv_g0PiDlJj5Q&usqp=CAU" height="100" width="100"  alt ="" /></button> 
          <span className="name mt-3">{firstname+" "+lastname} </span> 
          <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
          <span className="name mt-3">Email:{email} </span> 
            </div>
         <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Requests</button> 
         </div> 
         <div className=" d-flex mt-2"> 
         <button className="btn1 btn-dark">My Posts</button> 
         </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
             <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div> <div className=" px-2     rounded mt-4 date "> <span className="join">Copyright &copy; Your Website 2023  </span> </div> </div> </div>
</div>
  </div>
  </>
  )
}

export default Profile