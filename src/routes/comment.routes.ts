import { Router } from "express";

import createCommentController from "../controllers/comment/createComment.controller";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import postCommentSchema from "../schemas/postComment.schema";

const commentRouter = Router();

commentRouter.post(
  "/",
  yupValidateMiddleware(postCommentSchema),
  createCommentController
);

export default commentRouter;
