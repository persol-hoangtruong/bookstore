import { NextApiRequest, NextApiResponse } from "next";

import { client } from "~@/utils/client";


export abstract class BffBaseRepository {
  axiosClient;

  req: NextApiRequest;
  res: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
    this.axiosClient = client;
  }
}
