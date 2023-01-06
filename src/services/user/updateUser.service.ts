import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const updateUserService = async (
  id: string,
  name?: string,
  email?: string,
  password?: string,
  birthdate?: string,
  cpf?: string,
  cellphone?: string,
  description?: string,
  is_active?: boolean,
  is_seller?: boolean
) => {
  const userExists = await prisma.user.findUnique({ where: { id: id } });

  if (!userExists) {
    throw new AppError(404, "usuário não encontrado");
  }

  if (password) {
    const hashedPassword = await hash(password, 10);

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        birthdate: birthdate,
        cpf: cpf,
        cellphone: cellphone,
        description: description,
        is_active: is_active,
        is_seller: is_seller,
      },
      select: {
        name: true,
        email: true,
        birthdate: true,
        cpf: true,
        cellphone: true,
        description: true,
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

    return updateUser;
  } else {
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        password: password,
        birthdate: birthdate,
        cpf: cpf,
        cellphone: cellphone,
        description: description,
        is_active: is_active,
        is_seller: is_seller,
      },
      select: {
        name: true,
        email: true,
        birthdate: true,
        cpf: true,
        cellphone: true,
        description: true,
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

    return updateUser;
  }
};

export default updateUserService;
