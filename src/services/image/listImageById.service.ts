import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const listImageByIdService = async (id: string) => {
  const image = await prisma.image.findUnique({
    where: {
      id,
    },
  });

  if (!image) {
    throw new AppError(404, "Imagem não encontrada");
  }

  return image;
};

export default listImageByIdService;
