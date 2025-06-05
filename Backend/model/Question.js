import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String
})
export const Question = mongoose.model("Question", questionSchema)
export default Question;


