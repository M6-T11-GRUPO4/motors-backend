import { prisma } from "../../prismaClient";

const deleteVehicleService = async (id: string) => {
  const deleteVehicle = await prisma.vehicle.update({
    where: {
      id: id,
    },
    data: {
      is_active: false,
    },
  });

  return "Anúncio desativado";
};

export default deleteVehicleService;
