import { Router } from "express";

import createImageController from "../controllers/image/createImage.controller";
import listAllImagesController from "../controllers/image/listAllImages.controller";

const imageRouter = Router();

imageRouter.post("", createImageController);

imageRouter.get("", listAllImagesController);

export default imageRouter;
