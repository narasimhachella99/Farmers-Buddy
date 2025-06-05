import Soil from "../model/Soil.js";

export const addSoil = async (req, res) => {
    try {
        const data = req.body;
        const soil = new Soil(data)
        await soil.save(soil);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}



export const getSoil = async (req, res) => {
    try {
        const data = await Soil.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}


export const getSoilById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Soil.findById(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}


export const getSoilByName = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await Soil.findById(name);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}



export const deleteSoilById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Soil.deleteOne(id);
        res.status(200).send({ msg: "Soil deleted successfully" })
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

export const updateSoilById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Soil.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

export const getBySeasonAndSoilType = async (req, res) => {
    try {
        const { season, soilType } = req.query;
        const data = await Soil.find({ season: season, soilType: soilType })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

