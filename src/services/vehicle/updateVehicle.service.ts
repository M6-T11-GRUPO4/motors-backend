import { prisma } from "../../prismaClient";
import { IVehiclePatchRequest } from "../../interfaces";

const updateVehicleService = async (
  id: string,
  description?: string,
  km?: number,
  name?: string,
  price?: number,
  type?: string,
  user_mokado?: string,
  year?: number,
  is_active?: boolean
) => {
  const updateVehicle = await prisma.vehicle.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      description: description,
      price: price,
      km: km,
      year: year,
      type: type,
      user_mokado: user_mokado,
      is_active: is_active,
    },
  });

  return updateVehicle;
};

export default updateVehicleService;
