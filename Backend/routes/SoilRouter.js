import express from 'express'
import * as SoilController from '../controllers/SoilController.js'

const soilRouter=express.Router();
soilRouter.patch("/:id",SoilController.updateSoilById)
soilRouter.get("/search",SoilController.getBySeasonAndSoilType)
soilRouter.get("/",SoilController.getSoil);
soilRouter.get("/:id",SoilController.getSoilById)
soilRouter.post("/",SoilController.addSoil)
soilRouter.delete("/:id",SoilController.deleteSoilById)


export default soilRouter;