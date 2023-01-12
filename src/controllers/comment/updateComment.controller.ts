import { Request, Response } from "express";

import updateCommentService from "../../services/comment/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
  const { comment } = req.body;

  const { id } = req.params;

  const newComment = await updateCommentService(comment, id);

  return res.status(200).json(newComment);
};

export default updateCommentController;
