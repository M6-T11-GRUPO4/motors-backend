import { AppError } from "../../errors/appError";
import { IAddressUpdate } from "../../interfaces";
import { prisma } from "../../prismaClient";

const updateAddressService = async (
  { cep, city, complement, number, state, street }: IAddressUpdate,
  id: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const address = await prisma.address.update({
    where: {
      userId: id,
    },
    data: {
      cep,
      city,
      complement,
      number,
      state,
      street,
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

  return address;
};

export default updateAddressService;
