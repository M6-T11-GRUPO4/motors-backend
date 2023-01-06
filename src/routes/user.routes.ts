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

const userRouter = Router();

userRouter.post(
  "/register",
  yupValidateMiddleware(postUserSchema),
  verifyEmailAndCpfAvailabilityMiddleware,
  createUserController
);

userRouter.post("/login", userLoginController);

userRouter.get("/:id", listUserByIdController);

userRouter.patch(
  "/:id",
  yupValidateMiddleware(patchUserSchema),
  updateUserController
);

userRouter.delete("/:id", deleteUserController);

userRouter.get("/:id/vehicles", listVehiclesByIdUserController);

export default userRouter;
