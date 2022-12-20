import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const softDeleteVehicleService = async (id: string) => {

  const vehicleExists = await prisma.vehicle.findUnique({where:{id:id}})

  if(!vehicleExists){
    throw new AppError(400, "Veículo não encontrado")
  }

  const deleteVehicle = await prisma.vehicle.update({
    where: {
      id: id,
    },
    data: {
      is_active: false,
    },
  });

  return "Anúncio desativado";
};

export default softDeleteVehicleService;