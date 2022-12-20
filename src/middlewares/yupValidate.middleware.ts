import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors/appError";

const yupValidateMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await schema.validate(data, { abortEarly: false });
      next();
    } catch (error: any) {
      throw new AppError(400, error.errors);
    }
  };

export default yupValidateMiddleware;
