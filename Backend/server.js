import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import farmerRouter from "./routes/FarmerRouter.js";
import soilRouter from "./routes/SoilRouter.js";
import questionRouter from "./routes/QuestionRouter.js";
const app= express('express');
app.use(cors());
app.use(express.json())

const BASEURL = "mongodb://127.0.0.1:27017/FarmerBuddy"

try{
    await mongoose.connect(BASEURL)
    app.listen(4000,()=>{
        console.log("Server connected on port 5000")
    })
}catch(error){
    console.log("Not connected")
}

app.use("/farmer",farmerRouter)
app.use("/soil",soilRouter)
app.use("/question",questionRouter)

