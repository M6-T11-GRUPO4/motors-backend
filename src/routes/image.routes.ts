import { Router } from "express";

import createImageController from "../controllers/image/createImage.controller";

const imageRouter = Router();

imageRouter.post("", createImageController);

export default imageRouter;
