import { NextApiRequest, NextApiResponse } from "next";

import { BffBooksController } from "./BffBooksController";
import { BffBooksRepository } from "./BffBooksRepository";
import { BffBooksService } from "./BffBooksService";


export function bffBooksProvider(req: NextApiRequest, res: NextApiResponse) {
  const bffBooksRepository = new BffBooksRepository();
  const bffBooksService = new BffBooksService(bffBooksRepository);
  const bffBooksController = new BffBooksController(req, res, bffBooksService);

  return bffBooksController;
}

