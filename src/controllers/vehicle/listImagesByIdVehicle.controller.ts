import { Request, Response } from "express";
import listImagesByIdVehicleService from "../../services/vehicle/listImagesByIdVehicle.service";

const listImagesByIdVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const vehicle = await listImagesByIdVehicleService({ id });

  return res.status(200).json(vehicle);
};

export default listImagesByIdVehicleController;
