import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const createImageService = async (url: string, vehicleId: string) => {
  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: vehicleId,
    },
  });

  if (!vehicle) {
    throw new AppError(404, "Veículo não encontrado");
  }

  const image = await prisma.image.create({
    data: {
      url,
      vehicleId,
    },
  });

  return image;
};

export default createImageService;
