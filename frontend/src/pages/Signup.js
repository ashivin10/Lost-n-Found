import React from 'react'
import "./Signup.css"
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
function Signup() {

    const [ldata, setlData] = useState({
		firstName: "",
		lastName: "",
        mobile:"",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {

		setlData({ ...ldata, [input.name]: input.value });
    console.log(ldata)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, ldata);
			navigate("/signin");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <>
    {error && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert   variant="filled" severity="error">{error}</Alert>
    </Stack>}
        <div className="signup-form">
    <form >
		<h2>Register</h2>
		<p className="hint-text">Create your account.</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" name='firstName' className="form-control" placeholder="First Name"
                onChange={handleChange}
                value={ldata.firstName} required="required"/></div>
				<div className="col"><input type="text" name='lastName' className="form-control"  placeholder="Last Name" 
                onChange={handleChange}
                value={ldata.lastName} required="required"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="tel" name='mobile' className="form-control"  placeholder="Mobile No"
            onChange={handleChange}
            value={ldata.mobile} required="required"/>
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name='email'  placeholder="Email" onChange={handleChange}
							  value={ldata.email}required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name='password'  placeholder="Password"
            onChange={handleChange}
            value={ldata.password} 
            required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" required="required"/>
        </div>        
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <a href="/signin">Sign in</a></div>
</div>
    </>
  )
}

export default Signup