import express, { Request, Response } from "express";
import "express-async-errors";
import appRoutes from "./routes/index.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
appRoutes(app);

app.use("/", (req: Request, res: Response) => {
  return res.send("Olá mundo");
});

const PORT = process.env.PORT || 4000;

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor executando na porta " + PORT);
});

export default app;
