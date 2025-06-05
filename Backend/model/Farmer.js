import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: String,
    phoneNumber: Number,
    totalLand: String
})

export const Farmer = mongoose.model("Farmer", farmerSchema)

export default Farmer;