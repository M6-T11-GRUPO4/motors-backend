import { Router } from "express";

import updateAddressController from "../controllers/address/updateAddress.controller";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import patchAddressSchema from "../schemas/patchAddress.schema";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import userIsHimselfMiddleware from "../middlewares/userIsHimself.middlware";
import listAddressByIdController from "../controllers/address/listAddressById.controller";

const addressRoutes = Router();

addressRoutes.get(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  listAddressByIdController
);

addressRoutes.patch(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  yupValidateMiddleware(patchAddressSchema),
  updateAddressController
);

export default addressRoutes;
