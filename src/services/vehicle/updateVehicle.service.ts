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
      null;
    } else if (type?.toLowerCase().includes("moto")) {
      null;
    } else {
      throw new AppError(400, "O 'Type' aceita apenas 'Carro' ou 'Moto'");
    }
  }

  const vehicleExists = await prisma.vehicle.findUnique({ where: { id: id } });

  if (!vehicleExists) {
    throw new AppError(400, "Veículo não encontrado");
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
