import { Request, Response } from "express";
import softDeleteVehicleService from "../../services/vehicle/softDeleteVehicle.service";

const softDeleteVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteVehicle = await softDeleteVehicleService(id);

  return res.status(200).json({message: deleteVehicle});
};

export default softDeleteVehicleController;
