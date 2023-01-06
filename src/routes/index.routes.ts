import { Express } from "express";

import vehicleRouter from "./vehicle.routes";
import imageRouter from "./image.routes";
import userRouter from "./user.routes";
import commentRouter from "./comment.routes";
import addressRoutes from "./address.routes";

const appRoutes = (app: Express) => {
  app.use("/vehicles", vehicleRouter);
  app.use("/images", imageRouter);
  app.use("/users", userRouter);
  app.use("/comments", commentRouter);
  app.use("/address", addressRoutes);
};

export default appRoutes;
