//4 Steps to make a Server

// Express ko bulana hoga is file mai
const express=require("express");
const dotenv=require("dotenv")
const { connectDb } = require("./connection");
const {readdirSync} =require("fs");
const { connect } = require("http2");
const cors=require("cors")

//import the route
//const authRoute=require("./routes/authRoutes")

//Binding env
dotenv.config();

// Express ko call krna hoga ek variable mai
const app=express();

// Port ko define krna parega : Port=Door
const port=process.env.PORT || 3000;

connectDb()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}
))
app.use(express.json())
//Making Routes
app.get("/",(req,res)=>{
    res.send("Server Running...")
})

//How to use Routes
//app.use("/api",authRoute)

//Importing and Using Routes Dynamically
readdirSync("./routes").map((route)=>{
    app.use("/api",require(`./routes/${route}`))
});

// types of requests
// 1. GET -> To get the data from the server
// 2. POST -> To post the data to the server
// 3. PUT -> To update the data on the server
// 4. DELETE -> To dete the data form the server

// Server ko Listen krna hoga 
app.listen(port,()=>{
    console.log('Server is running on port' ,port)
})