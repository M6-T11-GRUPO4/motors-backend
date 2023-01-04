import { prisma } from "../../prismaClient";
import { IUserRequest } from "../../interfaces";
import { hash } from "bcrypt";

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
    },
  });

  return user;
};

export default createUserService;
