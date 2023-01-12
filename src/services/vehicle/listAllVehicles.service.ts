import { prisma } from "../../prismaClient";

const listAllVehiclesService = async () => {
  const returnVehicle = await prisma.vehicle.findMany({
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

  return returnVehicle.reverse();
};

export default listAllVehiclesService;
