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

  if (!returnVehicles) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return returnVehicles;
};

export default listVehiclesByIdUserService;
