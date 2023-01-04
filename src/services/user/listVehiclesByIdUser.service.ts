import { AppError } from "../../errors/appError";
import { IUserId } from "../../interfaces";
import { prisma } from "../../prismaClient";

const listVehiclesByIdUserService = async ({ id }: IUserId) => {
  const returnVehicles = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      vehicles: true,
    },
  });

  if (returnVehicles === null) {
    throw new AppError(400, "Veículos não encontrados");
  }

  return returnVehicles;
};

export default listVehiclesByIdUserService;
