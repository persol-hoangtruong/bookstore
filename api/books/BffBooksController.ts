import { NextApiRequest, NextApiResponse } from "next";

import { BffBaseController } from "~@/api/base/BffBaseController";

import { BffBooksService } from "./BffBooksService";


export class BffBooksController extends BffBaseController {
  constructor(req: NextApiRequest, res: NextApiResponse, private bffBooksService: BffBooksService) {
    super(req, res);
  }

  async getBooks() {
    const query = this.req.query as { [key: string]: any };
    const data = await this.bffBooksService.getBooks(query);

    return this.successResponse(data);
  }
}
