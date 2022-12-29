import type { NextApiRequest, NextApiResponse } from "next";

import { bffBooksProvider } from "~@/api/books/BffBooksProvider";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await bffBooksProvider(req, res).getBooks();
}
