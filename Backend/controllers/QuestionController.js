import Question from "../model/Question.js";

export const addQuestion = async (req, res) => {
    try {
        const data = req.body;
        const question = new Question(data);
        await question.save();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}


export const getQuestions = async (req, res) => {
    try {
        const data = await Question.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

export const getQuestionById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Question.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

export const updateQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Question.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}
export const deleteQuestionById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Question.findOneAndDelete(id)
        res.status(200).send({ msg: "question deleted sucessfully" })
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

