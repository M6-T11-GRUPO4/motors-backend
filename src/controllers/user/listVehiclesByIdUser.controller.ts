import { Request, Response } from "express";
import listVehiclesByIdUserService from "../../services/user/listVehiclesByIdUser.service";

const listVehiclesByIdUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const vehicles = await listVehiclesByIdUserService({ id });

  return res.status(200).json(vehicles);
};

export default listVehiclesByIdUserController;
