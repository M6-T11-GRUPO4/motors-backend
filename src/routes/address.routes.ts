import { Router } from "express";

import updateAddressController from "../controllers/address/updateAddress.controller";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import patchAddressSchema from "../schemas/patchAddress.schema";

const addressRoutes = Router();

addressRoutes.patch(
  "/:id",
  yupValidateMiddleware(patchAddressSchema),
  updateAddressController
);

export default addressRoutes;
