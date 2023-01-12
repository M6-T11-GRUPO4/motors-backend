import { Request, Response } from "express";

import deleteCommentService from "../../services/comment/deleteComment.service";

const deleteCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const comment = await deleteCommentService(id);

  return res.status(204).json(comment);
};

export default deleteCommentController;
