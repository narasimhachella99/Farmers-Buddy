import mongoose from "mongoose";

const soilSchema = new mongoose.Schema({
    name:String,
    season:String,
    soilType:String,
    nitrogen:String,
    phosphrus:String,
    fertilizer:String,
    cost:Number,
    fertilizerYear:Number,
    comment:String 
})

export const Soil = mongoose.model("Soil",soilSchema);

export default Soil;