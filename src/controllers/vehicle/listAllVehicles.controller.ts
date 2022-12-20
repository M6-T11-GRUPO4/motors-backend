import { Request, Response } from "express";
import listAllVehiclesService from "../../services/vehicle/listAllVehicles.service";

const listAllVehiclesController = async (req: Request, res: Response) => {

  const vehicles = await listAllVehiclesService();

  return res.status(200).json(vehicles);
};

export default listAllVehiclesController;
