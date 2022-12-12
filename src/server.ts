import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados inicializado");
  })
  .catch((err) => {
    console.error("Erro durante a inicialização do Data Source", err);
  });
