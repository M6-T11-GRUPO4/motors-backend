import { Router } from "express";

import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import postVehicleSchema from "../schemas/postVehicle.schema";
import createVehicleController from "../controllers/vehicle/createVehicle.controller";
import listAllVehiclesController from "../controllers/vehicle/listAllVehicles.controller";
import listImagesByIdVehicleController from "../controllers/vehicle/listImagesByIdVehicle.controller";
import listVehicleByIdController from "../controllers/vehicle/listVehicleById.controller";
import updateVehicleController from "../controllers/vehicle/updateVehicle.controller";
import deleteVehicleController from "../controllers/vehicle/deleteVehicle.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isSellerMiddleware from "../middlewares/isSeller.middleware";
import isAdOwnerMiddleware from "../middlewares/isAdOwner.middleware";
import patchVehicleSchema from "../schemas/patchVehicle.schema";

const vehicleRouter = Router();

vehicleRouter.post(
  "",
  authTokenMiddleware,
  yupValidateMiddleware(postVehicleSchema),
  isSellerMiddleware,
  createVehicleController
);

vehicleRouter.get("", listAllVehiclesController);
vehicleRouter.get("/:id", listVehicleByIdController);
vehicleRouter.get("/:id/images", listImagesByIdVehicleController);

vehicleRouter.patch(
  "/:id",
  authTokenMiddleware,
  isAdOwnerMiddleware,
  yupValidateMiddleware(patchVehicleSchema),
  updateVehicleController
);

vehicleRouter.delete(
  "/:id",
  authTokenMiddleware,
  isAdOwnerMiddleware,
  deleteVehicleController
);

export default vehicleRouter;
