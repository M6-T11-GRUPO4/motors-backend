import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const listUserByIdService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      description: true,
      cpf: true,
      birthdate: true,
      cellphone: true,
      is_active: true,
      is_seller: true,
      vehicles: true,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const address = await prisma.address.findUnique({
    where: {
      userId: id,
    },
    select: {
      cep: true,
      city: true,
      number: true,
      state: true,
      street: true,
      complement: true,
    },
  });

  const returnedUser = {
    ...user,
    address,
  };

  return returnedUser;
};

export default listUserByIdService;
