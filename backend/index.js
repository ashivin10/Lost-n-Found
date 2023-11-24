require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./Routes/signup')
const authRoutes = require('./Routes/signin')
const postItems =require("./Routes/postItem")
const getItems  =require("./Routes/getItems")
const myPost  =require("./Routes/myPost")
const sendReq  =require("./Routes/sendReq")
const getReq  =require("./Routes/getReq")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use('/upload', express.static('upload'))
//routes

app.use("/api/users", userRoutes);//Creating users
app.use("/api/login", authRoutes);//Login for users
app.use("/api/postitems", postItems);
app.use("/api/getitems", getItems);
app.use("/api/myPost", myPost);
app.use("/api/sendreq", sendReq);
app.use("/api/getreq", getReq);


//hosting the server
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));