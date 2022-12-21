import { Router } from "express";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import postVehicleSchema from "../schemas/postVehicle.schema";

import createVehicleController from "../controllers/vehicle/createVehicle.controller";
import listAllVehiclesController from "../controllers/vehicle/listAllVehicles.controller";
import listImagesByIdVehicleController from "../controllers/vehicle/listImagesByIdVehicle.controller";
import listVehicleByIdController from "../controllers/vehicle/listVehicleById.controller";
import updateVehicleController from "../controllers/vehicle/updateVehicle.controller";
import softDeleteVehicleController from "../controllers/vehicle/softDeleteVehicle.controller";
import deleteVehicleController from "../controllers/vehicle/deleteVehicle.controller";

const vehicleRouter = Router();

vehicleRouter.post(
  "",
  yupValidateMiddleware(postVehicleSchema),
  createVehicleController
);

vehicleRouter.get("", listAllVehiclesController);
vehicleRouter.get("/:id", listVehicleByIdController);
vehicleRouter.get("/:id/images", listImagesByIdVehicleController);

vehicleRouter.patch("/:id", updateVehicleController);

vehicleRouter.delete("/:id/deactivate", softDeleteVehicleController);
vehicleRouter.delete("/:id/delete", deleteVehicleController);

export default vehicleRouter;
