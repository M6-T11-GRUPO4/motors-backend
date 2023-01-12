import { AppError } from "../../errors/appError";
import { IVehicleRequest } from "../../interfaces";
import { prisma } from "../../prismaClient";

const createVehicleService = async ({
  name,
  description,
  price,
  year,
  km,
  type,
  is_active,
  image,
  userId,
}: IVehicleRequest) => {
  if (type.toLowerCase().includes("carro")) {
    type = "Carro";
  } else if (type.toLowerCase().includes("moto")) {
    type = "Moto";
  } else {
    throw new AppError(400, "O 'Type' aceita apenas 'Carro' ou 'Moto'");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const vehicle = await prisma.vehicle.create({
    data: {
      name,
      description,
      price,
      year,
      km,
      type,
      is_active,
      userId,
    },
    include: {
      image: true,
    },
  });

  if (image) {
    for (let i = 0; i < image?.length; i++) {
      await prisma.image.create({
        data: {
          vehicleId: vehicle.id,
          url: image[i],
        },
      });
    }
  }

  const returnVehicle = await prisma.vehicle.findUnique({
    where: {
      id: vehicle.id,
    },
    include: {
      image: {
        select: {
          url: true,
        },
      },
    },
  });

  return returnVehicle;
};

export default createVehicleService;
