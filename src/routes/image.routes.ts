import { Router } from "express";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import postImageSchema from "../schemas/postImage.schema";

import createImageController from "../controllers/image/createImage.controller";
import deleteImageController from "../controllers/image/deleteImage.controller";
import listAllImagesController from "../controllers/image/listAllImages.controller";
import listImageByIdController from "../controllers/image/listImageById.controller";

const imageRouter = Router();

imageRouter.post(
  "",
  yupValidateMiddleware(postImageSchema),
  createImageController
);

imageRouter.get("", listAllImagesController);
imageRouter.get("/:id", listImageByIdController);

imageRouter.delete("/:id", deleteImageController);

export default imageRouter;
