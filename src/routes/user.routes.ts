import { Router } from "express";
import verifyEmailAndCpfAvailabilityMiddleware from "../middlewares/verifyEmailAndCpfAvailability.middleware";

import createUserController from "../controllers/user/createUser.controller";

const userRouter = Router();

userRouter.post(
  "/register",
  verifyEmailAndCpfAvailabilityMiddleware,
  createUserController
);

export default userRouter;
