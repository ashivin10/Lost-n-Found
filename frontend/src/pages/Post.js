import React from 'react'
import Navbar from '../components/navbar'
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import FormData from 'form-data'
import './Post.css'
function Post() {
  const id = localStorage.getItem("id");

    const [Pdata, setPdata] = useState({
		itemName: "",
		mobileno: "",
    location:"",
		description: "",
	});
    const formData = new FormData();

    const navigate = useNavigate();
    
    

    const handleChange = ({ currentTarget: input }) => {

		setPdata({ ...Pdata, [input.name]: input.value });
    console.log(Pdata)
	};
    const onInputChange = (e) => {
    
    formData.append("lostItem", e.target.files[0]);

    
        console.log(formData)
      };
    const handleSubmit = async (e) => {
		e.preventDefault();
        formData.append("itemName", Pdata.itemName);
        formData.append("userid", id);
        formData.append("mobileno", Pdata.mobileno);
        formData.append("location", Pdata.location);
        formData.append("description", Pdata.description);
		try {
			const url = "http://localhost:8080/api/postitems";
			const { data: res } = await axios.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });
			navigate("/");
			console.log(res.message);
		} catch (error) {
			console.log(error)
		}
	};
  return (
  <>
  <Navbar/>
  
  <div className="post-form ">
    <form >
		<h2>POST FORM</h2>
		<p className="hint-text">Found Anything?</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" onChange={handleChange}
                value={Pdata.itemName} name= "itemName"className="form-control" placeholder="Item Name *" required="required"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="number" onChange={handleChange}
                value={Pdata.mobileno}className="form-control" name= "mobileno" placeholder="Mobile No*" required="required"/>
        </div>
        <div className="form-group">
        	<input type="text" onChange={handleChange}
                value={Pdata.location}className="form-control" name= "location" placeholder="Location*" required="required"/>
        </div>
		<div className="form-group">
            <textarea  className="form-control desc" onChange={handleChange}
                value={Pdata.description}name= "description" placeholder="Description*" />
        </div>
		<div className="form-group">
            <input type="file" onChange={onInputChange} name="photo" accept="image/*"/>
        </div>        
        
		<div className="form-group">
            <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">Post</button>
        </div>
    </form>
</div>
  </>
  )
}

export default Post