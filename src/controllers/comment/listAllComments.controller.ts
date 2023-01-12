import { Request, Response } from "express";

import listAllCommentsService from "../../services/comment/listAllComments.service";

const listAllCommentsController = async (req: Request, res: Response) => {
  const comments = await listAllCommentsService();

  return res.status(200).json(comments);
};

export default listAllCommentsController;
