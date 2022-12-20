import { Router } from "express";

import createImageController from "../controllers/image/createImage.controller";
import deleteImageController from "../controllers/image/deleteImage.controller";
import listAllImagesController from "../controllers/image/listAllImages.controller";
import listImageByIdController from "../controllers/image/listImageById.controller";

const imageRouter = Router();

imageRouter.post("", createImageController);

imageRouter.get("", listAllImagesController);
imageRouter.get("/:id", listImageByIdController);

imageRouter.delete("/:id", deleteImageController);

export default imageRouter;
