import { Router } from "express";

import createCommentController from "../controllers/comment/createComment.controller";
import deleteCommentController from "../controllers/comment/deleteComment.controller";
import listAllCommentsController from "../controllers/comment/listAllComments.controller";
import listCommentsByVehicleController from "../controllers/comment/listCommentsByVehicle.controller";
import updateCommentController from "../controllers/comment/updateComment.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isCommentOwnerMiddleware from "../middlewares/isCommentOwner.middleware";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import patchCommentSchema from "../schemas/patchComment.schema";
import postCommentSchema from "../schemas/postComment.schema";

const commentRouter = Router();

commentRouter.post(
  "/",
  authTokenMiddleware,
  yupValidateMiddleware(postCommentSchema),
  createCommentController
);

commentRouter.get("/", listAllCommentsController);
commentRouter.get("/:vehicleId", listCommentsByVehicleController);

commentRouter.patch(
  "/:id",
  authTokenMiddleware,
  isCommentOwnerMiddleware,
  yupValidateMiddleware(patchCommentSchema),
  updateCommentController
);

commentRouter.delete(
  "/:id",
  authTokenMiddleware,
  isCommentOwnerMiddleware,
  deleteCommentController
);

export default commentRouter;
