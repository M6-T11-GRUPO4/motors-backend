import { Request, Response } from "express";

import listAddressByIdService from "../../services/address/listAddressById.service";

const listAddressByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const address = await listAddressByIdService(id);

  return res.status(200).json(address);
};

export default listAddressByIdController;
