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
  // console.log({name, email, password, birthdate, cpf, cellphone, description, is_active, is_seller})

  const hashedPassword = await hash(password, 10);

  console.log(hashedPassword);

  const user = await prisma.user.create({
    data: {
      birthdate: new Date(birthdate),
      cellphone,
      cpf,
      description,
      email,
      name,
      password: hashedPassword,
    },
  });

  console.log(user);

  return user;
};

export default createUserService;
