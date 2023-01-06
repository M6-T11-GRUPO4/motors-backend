import { Router } from "express";
import verifyEmailAndCpfAvailabilityMiddleware from "../middlewares/verifyEmailAndCpfAvailability.middleware";

import createUserController from "../controllers/user/createUser.controller";
import listUserByIdController from "../controllers/user/listUserById.controller";
import listVehiclesByIdUserController from "../controllers/user/listVehiclesByIdUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import userLoginController from "../controllers/login/userLogin.controller";
import forgotPasswordController from "../controllers/user/forgotPassword.controller";
import resetPasswordController from "../controllers/user/resetPassword.controller";

const userRouter = Router();

userRouter.post(
  "/register",
  verifyEmailAndCpfAvailabilityMiddleware,
  createUserController
);

userRouter.post("/login", userLoginController);

userRouter.post('/login/forgot-password', forgotPasswordController)

userRouter.get("/:id", listUserByIdController);

userRouter.patch("/:id", updateUserController);

userRouter.patch('/login/reset-password', resetPasswordController)

userRouter.delete("/:id", deleteUserController);

userRouter.get("/:id/vehicles", listVehiclesByIdUserController);

export default userRouter;
