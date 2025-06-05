import express from 'express'
import * as FarmerController from '../controllers/FarmerController.js'
import * as PanchayathController from '../controllers/PanchayathController.js'

const farmerRouter = express.Router();
farmerRouter.get("/:email",FarmerController.getFarmerByEmail)
farmerRouter.post("/",FarmerController.addFarmer)
farmerRouter.post("/login",PanchayathController.login)
farmerRouter.get("/",FarmerController.getFarmers)
farmerRouter.get("/:id",FarmerController.getFarnmerById)

farmerRouter.delete("/:id",FarmerController.deleteFarmer)
farmerRouter.patch("/:id",FarmerController.updateFarmer)

export default farmerRouter;