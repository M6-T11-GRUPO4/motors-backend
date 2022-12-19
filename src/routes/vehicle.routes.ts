import { Router } from "express";
import createVehicleController from "../controllers/vehicle/createVehicle.controller";

const vehicleRouter = Router();

vehicleRouter.post("", createVehicleController);

export default vehicleRouter;
