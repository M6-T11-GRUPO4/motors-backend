import { AppError } from "../../errors/appError";
import { prisma } from "../../prismaClient";

const deleteImageService = async (id: string) => {
  const image = await prisma.image.findUnique({
    where: {
      id,
    },
  });

  if (!image) {
    throw new AppError(404, "Imagem não encontrada");
  }

  await prisma.image.delete({
    where: {
      id,
    },
  });

  return;
};

export default deleteImageService;
