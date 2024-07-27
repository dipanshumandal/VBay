//4 Steps to make a Server

// Express ko bulana hoga is file mai
const express=require("express");
const dotenv=require("dotenv")

//Binding env
dotenv.config();

// Express ko call krna hoga ek variable mai
const app=express();

// Port ko define krna parega : Port=Door
const port=process.env.PORT || 3000;

//Making Routes
app.get("/",(req,res)=>{
    res.send("Server Running...")
})

// Server ko Listen krna hoga 
app.listen(port,()=>{
    console.log('Server is running on port' ,port)
})