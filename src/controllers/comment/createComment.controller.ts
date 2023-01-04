import { Request, Response } from "express";

import { ICommentRequest } from "../../interfaces";
import createCommentService from "../../services/comment/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const { comment, userId, vehicleId }: ICommentRequest = req.body;

  const newComment = await createCommentService({ comment, userId, vehicleId });

  return res.status(201).json(newComment);
};

export default createCommentController;
