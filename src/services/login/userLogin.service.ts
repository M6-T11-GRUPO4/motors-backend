import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";
import { IUserLogin } from "../../interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userLogin = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userLogin) {
    throw new AppError(401, "Email ou senha inválidos");
  }

  const comparePassword = bcrypt.compareSync(password, userLogin.password);

  if (!comparePassword) {
    throw new AppError(401, "Email ou senha inválidos");
  }

  const token = jwt.sign(
    { email: userLogin.email },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1h",
      subject: userLogin.id,
    }
  );

  return { id: userLogin.id, token };
};

export default userLoginService;
