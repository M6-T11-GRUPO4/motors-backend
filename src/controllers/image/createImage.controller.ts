import { Request, Response } from "express";

import createImageService from "../../services/image/createImage.service";

const createImageController = async (req: Request, res: Response) => {
  const { url, vehicleId } = req.body;

  const image = await createImageService(url, vehicleId);

  return res.status(201).json(image);
};

export default createImageController;
