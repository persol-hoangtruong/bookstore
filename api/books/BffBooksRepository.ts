import { BffBaseRepository } from "~@/api/base/BffBaseRepository";


export class BffBooksRepository extends BffBaseRepository {
  async getBooks(query: { [key: string]: any }) {
    const { authorization } = this.req.headers;
    const token = authorization?.split?.(" ")?.[1];


    const res = await this.axiosClient("books", {
      baseURL: process.env.BASE_API_URL,
      params: query,
      token: token,
    });

    return res;
  }
}
