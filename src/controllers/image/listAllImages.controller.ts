import { Request, Response } from "express";

import listAllImagesService from "../../services/image/listAllImages.service";

const listAllImagesController = async (req: Request, res: Response) => {
  const images = await listAllImagesService();

  return res.status(200).json(images);
};

export default listAllImagesController;
