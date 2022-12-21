import { prisma } from "../../prismaClient";

const listAllImagesService = async () => {
  const images = await prisma.image.findMany();

  return images;
};

export default listAllImagesService;
