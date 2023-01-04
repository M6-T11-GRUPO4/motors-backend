import { Request, Response } from "express";

import listCommentsByVehicleService from "../../services/comment/listCommentsByVehicle.service";

const listCommentsByVehicleController = async (req: Request, res: Response) => {
  const { vehicleId } = req.params;

  const comments = await listCommentsByVehicleService(vehicleId);

  return res.status(200).json(comments);
};

export default listCommentsByVehicleController;
