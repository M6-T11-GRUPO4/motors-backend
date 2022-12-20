import { Express } from "express";

import vehicleRouter from "./vehicle.routes";

const appRoutes = (app: Express) => {
  app.use("/vehicles", vehicleRouter);
};

export default appRoutes;
