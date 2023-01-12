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
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          description: true,
          cpf: true,
          birthdate: true,
          cellphone: true,
          is_active: true,
          is_seller: true,
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
