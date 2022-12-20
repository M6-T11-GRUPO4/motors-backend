import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const deleteVehicleService = async (id: string) => {

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

  console.log(deleteVehicle)

  return "Anúncio desativado";
};

export default deleteVehicleService;
