import { Request, Response } from "express";

import { IAddressUpdate } from "../../interfaces";
import updateAddressService from "../../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { cep, city, complement, number, state, street }: IAddressUpdate =
    req.body;

  const address = await updateAddressService(
    { cep, city, complement, number, state, street },
    id
  );

  return res.status(200).json(address);
};

export default updateAddressController;
