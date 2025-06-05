import express from 'express';
import * as QuestionController from '../controllers/QuestionController.js';

const questionRouter =express.Router();
questionRouter.get("/",QuestionController.getQuestions);
questionRouter.get("/:id",QuestionController.getQuestionById)
questionRouter.post("/",QuestionController.addQuestion)
questionRouter.delete("/:id",QuestionController.deleteQuestionById)
questionRouter.patch("/:id",QuestionController.updateQuestion)

export default questionRouter;