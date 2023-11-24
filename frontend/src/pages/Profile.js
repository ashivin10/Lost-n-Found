import React from 'react'
import Navbar from '../components/navbar'
import {  useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("last");
    localStorage.removeItem("email");
    localStorage.removeItem("mobileno");
    localStorage.removeItem("id");
    navigate("/signin");




};
    const firstname = localStorage.getItem("user");
    const lastname = localStorage.getItem("last");
    const email = localStorage.getItem("email");
    const mobileno = localStorage.getItem("mobileno");

 const user = firstname+" "+lastname
  return (<>
  <Navbar/>
  <section className="vh-100" style={{'background-color':' #eee;'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card" style={{"border-radius": "15px;"}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src="https://static.thenounproject.com/png/4314581-200.png" alt='prof'
                className="rounded-circle img-fluid" style={{"width": "100px;"}} />
            </div>
            <h4 className="mb-2">{user}</h4>
            <p className="text-muted mb-4">{mobileno} <span className="mx-2">|</span> <a
                href="/">{email}</a></p>
            
            <div className='d-flex flex-column'>

              <a href="/myPost" type="button" className="btn btn-primary btn-rounded btn-lg mt-2">

              My Post
              </a>
            <a href="/notification" type="button" className="btn btn-primary btn-rounded btn-lg mt-2">

             Notifications
            </a>

            </div>
            <button className="btn btn-primary btn-rounded btn-lg mt-2" onClick={logout}>LOG OUT</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  
  </>
  )
}

export default Profile