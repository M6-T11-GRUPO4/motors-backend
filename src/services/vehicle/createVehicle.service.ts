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
  user_mokado,
  image,
}: IVehicleRequest) => {
  const vehicle = await prisma.vehicle.create({
    data: {
      name,
      description,
      price,
      year,
      km,
      type,
      is_active,
      user_mokado,
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
