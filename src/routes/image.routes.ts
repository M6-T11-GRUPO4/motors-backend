import { Router } from "express";

import createImageController from "../controllers/image/createImage.controller";
import listAllImagesController from "../controllers/image/listAllImages.controller";
import listImageByIdController from "../controllers/image/listImageById.controller";

const imageRouter = Router();

imageRouter.post("", createImageController);

imageRouter.get("", listAllImagesController);
imageRouter.get("/:id", listImageByIdController);

export default imageRouter;
