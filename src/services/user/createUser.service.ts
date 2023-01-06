import { hash } from "bcrypt";

import { prisma } from "../../prismaClient";
import { IUserRequest } from "../../interfaces";

const createUserService = async ({
  name,
  email,
  password,
  birthdate,
  cpf,
  cellphone,
  description,
  is_active = true,
  is_seller = false,
  cep,
  city,
  number,
  state,
  street,
  complement,
}: IUserRequest) => {
  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      description,
      cpf,
      birthdate: new Date(birthdate),
      cellphone,
      is_active,
      is_seller,
      address: {
        create: {
          cep,
          city,
          number,
          state,
          street,
          complement,
        },
      },
    },
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

  return user;
};

export default createUserService;
