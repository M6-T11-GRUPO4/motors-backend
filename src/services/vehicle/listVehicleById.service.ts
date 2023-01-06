import { AppError } from "../../errors/appError";
import { IVehicleId } from "../../interfaces";
import { prisma } from "../../prismaClient";

const listVehicleByIdService = async ({ id }: IVehicleId) => {
  const returnVehicle = await prisma.vehicle.findUnique({
    where: {
      id: id,
    },
    include: {
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  if (!returnVehicle) {
    throw new AppError(404, "Veículo não encontrado");
  }

  return returnVehicle;
};

export default listVehicleByIdService;
