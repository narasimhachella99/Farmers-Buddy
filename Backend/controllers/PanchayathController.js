import Farmer from "../model/Farmer.js";

export const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (email === "panchayath@gmail.com" && password === "panchayath") {
            res.status(200).send({ msg: "Panchayath login successfully" })
        }else{
        const farmer = await Farmer.findOne({ email: email })
        if (farmer) {
            const result = req.body.password === farmer.password;
            if (result) {
                res.status(200).send({ msg: "Farmer login successfully" })
            } else {
                res.status(400).send({ msg: "Password does not matched" })
            }
        
        } else {
            res.status(400).send({ msg: "User not exist" })
        }
    }
    } catch (error) {
        res.status(500).send({ error: error })
    }
}