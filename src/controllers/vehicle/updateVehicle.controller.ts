import { Request, Response } from "express";
import { IVehiclePatchRequest } from "../../interfaces";
import updateVehicleService from "../../services/vehicle/updateVehicle.service";

const updateVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    description,
    km,
    name,
    price,
    type,
    year,
    is_active,
    image
  }: IVehiclePatchRequest = req.body;

  const updateVehicle = await updateVehicleService(
    id,
    description,
    km,
    name,
    price,
    type,
    year,
    is_active,
    image
  );

  return res.status(200).json(updateVehicle);
};

export default updateVehicleController;
