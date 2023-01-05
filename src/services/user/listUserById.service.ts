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
      address: {
        select: {
          cep: true,
          city: true,
          number: true,
          state: true,
          street: true,
          complement: true,
        },
      },
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return user;
};

export default listUserByIdService;
