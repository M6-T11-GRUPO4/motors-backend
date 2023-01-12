import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";
import crypto from "crypto";
import { sendEmail } from "../../nodemailer.util";

const forgotPasswordService = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const token = crypto.randomBytes(3).toString("hex").toLocaleUpperCase();

  const now = new Date();
  now.setHours(now.getHours() + 1);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: token,
      passwordResetExpires: now,
    },
  });

  await sendEmail(user.email)

  return "Email de recuperação enviado com sucesso";
};

export default forgotPasswordService;
