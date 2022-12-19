import { PrismaClient } from "@prisma/client";

PrismaClient.initialize()
  .then(() => {
    console.log("Banco de dados inicializado");
  })
  .catch((err:Error) => {
    console.error("Erro durante a inicialização do Data Source", err);
  });
