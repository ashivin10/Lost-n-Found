import React from 'react'
import "./Signin.css"
function Signin() {
  return (
    <>
        <div className="signin-form">
    <form >
		<h2>Sign In</h2>
		<p className="hint-text">Login to continue.</p>

        <div className="form-group">
        	<input type="email" className="form-control"  placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control"  placeholder="Password" required="required"/>
        </div>
		        
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign In</button>
        </div>
    </form>
	<div className="text-center">Don't have an account? <a href="/signup">Sign Up</a></div>
</div>
    </>
  )
}

export default Signin