import { Express } from "express";

import vehicleRouter from "./vehicle.routes";
import imageRouter from "./image.routes";

const appRoutes = (app: Express) => {
  app.use("/vehicles", vehicleRouter);
  app.use("/images", imageRouter);
};

export default appRoutes;
