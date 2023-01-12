import { Request, Response } from "express";

import { ICommentRequest } from "../../interfaces";
import createCommentService from "../../services/comment/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const { comment }: ICommentRequest = req.body;

  const { vehicleId } = req.params;

  const { userId } = req.user;

  const newComment = await createCommentService({ comment, userId, vehicleId });

  return res.status(201).json(newComment);
};

export default createCommentController;
