import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const listAddressByIdService = async (id: string) => {
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
      user: {
        select: {
          name: true,
          email: true,
          birthdate: true,
          cpf: true,
          cellphone: true,
          description: true,
          is_active: true,
          is_seller: true,
        },
      },
    },
  });

  if (!address) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return address;
};

export default listAddressByIdService;
