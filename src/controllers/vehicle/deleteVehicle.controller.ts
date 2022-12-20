import { Request, Response } from "express";
import deleteVehicleService from "../../services/vehicle/deleteVehicle.service";

const deleteVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteVehicle = await deleteVehicleService(id);

  return res.status(200).json({message: deleteVehicle});
};

export default deleteVehicleController;
