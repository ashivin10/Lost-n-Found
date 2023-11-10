import React from 'react'
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios";
import "./Signin.css"
function Signin() {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.type]: input.value });
    console.log(input.type)
	}

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
      		localStorage.setItem("user", res.user);
			  localStorage.setItem("last", res.user_last);
			  localStorage.setItem("email", res.email);


			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        console.log(error)
			}
		}
	}
  return (
    <>
    {error && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{error}</Alert>
    </Stack>}
        <div className="signin-form">
    <form >

		<h2>Sign In</h2>
		<p className="hint-text">Login to continue.</p>

        <div className="form-group">
        	<input type="email" value={data.email}  onChange={handleChange}
          className="form-control"
           placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" onChange={handleChange}
							  value={data.password} placeholder="Password" required="required"/>
        </div>
		        
		<div className="form-group">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">Sign In</button>
        </div>
    </form>
	<div className="text-center">Don't have an account? <a href="/signup">Sign Up</a></div>
</div>
    </>
  )
}

export default Signin