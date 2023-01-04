import { Router } from "express";

import createCommentController from "../controllers/comment/createComment.controller";
import listAllCommentsController from "../controllers/comment/listAllComments.controller";
import listCommentsByVehicleController from "../controllers/comment/listCommentsByVehicle.controller";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import postCommentSchema from "../schemas/postComment.schema";

const commentRouter = Router();

commentRouter.post(
  "/",
  yupValidateMiddleware(postCommentSchema),
  createCommentController
);

commentRouter.get("/", listAllCommentsController);

commentRouter.get("/:vehicleId", listCommentsByVehicleController);

export default commentRouter;
