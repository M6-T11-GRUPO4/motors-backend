import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const updateVehicleService = async (
  id: string,
  description?: string,
  km?: number,
  name?: string,
  price?: number,
  type?: string,
  year?: number,
  is_active?: boolean,
  image?: string[]
) => {
  if (type) {
    if (type?.toLowerCase().includes("carro")) {
      type = "Carro";
    } else if (type?.toLowerCase().includes("moto")) {
      type = "Moto";
    } else {
      throw new AppError(400, "O 'Type' aceita apenas 'Carro' ou 'Moto'");
    }
  }

  await prisma.vehicle.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      description: description,
      price: price,
      km: km,
      year: year,
      type: type,
      is_active: is_active,
    },
  });

  await prisma.image.deleteMany({
    where: {
      vehicleId: id,
    },
  });  

  if (image?.length) {
    for (let i = 0; i < image?.length; i++) {
      await prisma.image.create({
        data: {
          url: image[i],
          vehicleId: id,
        },
      });
    }    
  }

  const updateVehicle = await prisma.vehicle.findUnique({
    where: {
      id: id
    },
    include: {
      image: true
    }
  })

  return updateVehicle;
};

export default updateVehicleService;
