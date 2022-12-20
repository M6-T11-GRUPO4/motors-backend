import { Request, Response } from "express";
import { IImageRequest, IVehicle, IVehicleRequest } from "../../interfaces";
import createVehicleService from "../../services/vehicle/createVehicle.service";

const createVehicleController = async (req: Request, res: Response) => {
  const {
    name,
    description,
    price,
    year,
    km,
    type,
    is_active,
    user_mokado,
    image,
  }: IVehicleRequest = req.body;

  const newVehicle = await createVehicleService({
    name,
    description,
    price,
    year,
    km,
    type,
    is_active,
    user_mokado,
    image,
  });

  return res.status(201).json(newVehicle);
};

export default createVehicleController;
