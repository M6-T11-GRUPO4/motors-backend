import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const deleteVehicleService = async (id: string) => {
  const vehicleExists = await prisma.vehicle.findUnique({ where: { id: id } });

  if (!vehicleExists) {
    throw new AppError(400, "Veículo não encontrado");
  }

  const deleteVehicle = await prisma.vehicle.delete({
    where: {
      id: id,
    },
  });

  return "Anúncio Excluído";
};

export default deleteVehicleService;
