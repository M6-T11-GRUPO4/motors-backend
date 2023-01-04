import { Router } from "express";
import verifyEmailAndCpfAvailabilityMiddleware from "../middlewares/verifyEmailAndCpfAvailability.middleware";

import createUserController from "../controllers/user/createUser.controller";
import listUserByIdController from "../controllers/user/listUserById.controller";
import listVehiclesByIdUserController from "../controllers/user/listVehiclesByIdUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";

const userRouter = Router();

userRouter.post(
  "/register",
  verifyEmailAndCpfAvailabilityMiddleware,
  createUserController
);

userRouter.get("/:id", listUserByIdController);

userRouter.patch("/:id", updateUserController);

userRouter.delete("/:id", deleteUserController);

userRouter.get("/:id/vehicles", listVehiclesByIdUserController);

export default userRouter;
