import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";


import "./Card.css"

export default function MediaCard(props) {
  const { item } = props;
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const mobileno = localStorage.getItem("mobileno");
  const firstname = localStorage.getItem("user");

  const [open, setOpen] = React.useState(false);
  const Rdata = {
	sendid: id,
	userid: item.userid,
	name:firstname,
	mobile: mobileno,
};


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpen = async() => {
	console.log("==",Rdata)
    setOpen(false);
	try {
		const url = "http://localhost:8080/api/sendreq";
		const { data: res } = await axios.post(url,Rdata);
		navigate("/");
		console.log(res.message);
	} catch (error) {
		console.log(error)
	}
  };

  const handleClose = () => {
    setOpen(false);
  };	
  return (
    <section class="light">
	<div class="container py-2">

		<article class="postcard light blue">
			<a class="postcard__img_link" href={`http://localhost:8080/upload/${item.image}`}>
				<img class="postcard__img" src={`http://localhost:8080/upload/${item.image}`} alt={item.image} />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue">{item.itemName.toUpperCase()}</h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{item.description}</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Contact : {item.mobileno}</li>
					<li class="tag__item"><i class="fas fa-clock mr-2">Location : {item.location}</i></li>
				</ul>
            <button type="button" onClick={handleClickOpen} className="btn btn-primary btn-rounded btn-lg mt-2" >
					Request For The Item
            </button>
			<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure to Submit the Request?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
		  would greatly appreciate your assistance in checking if it has been found and could be returned to me. Your help in this matter is invaluable, and I am hopeful for a positive resolution.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Reject</Button>
          <Button onClick={handleOpen} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
			</div>
		</article>
    </div>
</section>
  );
}