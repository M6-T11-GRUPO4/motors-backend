import { Router } from "express";

import verifyEmailAndCpfAvailabilityMiddleware from "../middlewares/verifyEmailAndCpfAvailability.middleware";
import createUserController from "../controllers/user/createUser.controller";
import listUserByIdController from "../controllers/user/listUserById.controller";
import listVehiclesByIdUserController from "../controllers/user/listVehiclesByIdUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import userLoginController from "../controllers/login/userLogin.controller";
import postUserSchema from "../schemas/postUser.schema";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import patchUserSchema from "../schemas/patchUser.schema";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import userIsHimselfMiddleware from "../middlewares/userIsHimself.middlware";

const userRouter = Router();

userRouter.post(
  "/register",
  yupValidateMiddleware(postUserSchema),
  verifyEmailAndCpfAvailabilityMiddleware,
  createUserController
);
userRouter.post("/login", userLoginController);

userRouter.get("/:id", listUserByIdController);
userRouter.get("/:id/vehicles", listVehiclesByIdUserController);

userRouter.patch(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  yupValidateMiddleware(patchUserSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  deleteUserController
);

export default userRouter;
