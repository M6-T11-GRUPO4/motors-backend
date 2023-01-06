import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";
import { IResetPassword } from "../../interfaces";
import { hash } from "bcrypt";

const resetPasswordService = async ({
  email,
  token,
  password,
}: IResetPassword) => {
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    throw new AppError(400, "Usuário não encontrado");
  }

  if (token !== user.passwordResetToken) {
    throw new AppError(
      400,
      "Código de recuperação de senha é inválido, verifique seu e-mail"
    );
  }

  const now = new Date();

  if (!user.passwordResetExpires) {
    throw new AppError(
      400,
      "Faça a solicitação de recuperação de senha e verifique seu e-mail"
    );
  } else {
    if (now > user.passwordResetExpires) {
      throw new AppError(
        400,
        "Código de recuperação expirado, gere um novo código e verifique seu e-mail"
      );
    }
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
    },
  });

  return "Senha alterada com sucesso, faça o login com a nova senha";
};

export default resetPasswordService;
