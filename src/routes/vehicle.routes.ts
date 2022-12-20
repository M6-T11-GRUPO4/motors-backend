import { Router } from "express";

import createVehicleController from "../controllers/vehicle/createVehicle.controller";
import deleteVehicleController from "../controllers/vehicle/deleteVehicle.controller";
import listAllVehiclesController from "../controllers/vehicle/listAllVehicles.controller";
import listImagesByIdVehicleController from "../controllers/vehicle/listImagesByIdVehicle.controller";
import listVehicleByIdController from "../controllers/vehicle/listVehicleById.controller";
import updateVehicleController from "../controllers/vehicle/updateVehicle.controller";

const vehicleRouter = Router();

vehicleRouter.post("", createVehicleController);

vehicleRouter.get("", listAllVehiclesController);

vehicleRouter.get("/:id", listVehicleByIdController);

vehicleRouter.patch("/:id", updateVehicleController);

vehicleRouter.patch("/:id/delete", deleteVehicleController);

vehicleRouter.get("/:id/images", listImagesByIdVehicleController);

export default vehicleRouter;
