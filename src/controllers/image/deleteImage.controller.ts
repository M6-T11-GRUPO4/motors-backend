import { Request, Response } from "express";

import deleteImageService from "../../services/image/deleteImage.service";

const deleteImageController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedImage = await deleteImageService(id);

  return res.status(204).json(deletedImage);
};

export default deleteImageController;
