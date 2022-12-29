import { BffBaseRepository } from "~@/api/base/BffBaseRepository";


export class BffBooksRepository extends BffBaseRepository {
  async getBooks(query: { [key: string]: any }) {
    const res = await this.axiosClient.get("books", {
      baseURL: process.env.BASE_API_URL,
      params: query,
    });

    return res.data;
  }
}
