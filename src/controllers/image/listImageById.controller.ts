import { Request, Response } from "express";

import listImageByIdService from "../../services/image/listImageById.service";

const listImageByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const image = await listImageByIdService(id);

  return res.status(200).json(image);
};

export default listImageByIdController;
