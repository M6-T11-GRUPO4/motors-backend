import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const updateVehicleService = async (
  id: string,
  description?: string,
  km?: number,
  name?: string,
  price?: number,
  type?: string,
  year?: number,
  is_active?: boolean
) => {
  if (type) {
    if (type?.toLowerCase().includes("carro")) {
      type = "Carro";
    } else if (type?.toLowerCase().includes("moto")) {
      type = "Moto";
    } else {
      throw new AppError(400, "O 'Type' aceita apenas 'Carro' ou 'Moto'");
    }
  }

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
      is_active: is_active,
    },
  });

  return updateVehicle;
};

export default updateVehicleService;
