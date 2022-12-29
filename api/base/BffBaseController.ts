import type { NextApiRequest, NextApiResponse } from "next";


export class BffBaseController {
  req: NextApiRequest;
  res: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }

  protected successResponse<T>(response: T): void {
    const statusCode = this.req.method === "POST" ? 201 : 200;

    return this.res
      .status(statusCode)
      .json({
        code: statusCode,
        message: "Success",
        data: response,
      });
  }
}
