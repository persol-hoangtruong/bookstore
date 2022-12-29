import { BffBaseService } from "~@/api/base/BffBaseService";

import { BffBooksRepository } from "./BffBooksRepository";


export class BffBooksService extends BffBaseService {
  constructor(private bffBooksRepository: BffBooksRepository) {
    super();
  }

  async getBooks(query: { [key: string]: any }) {
    const data = this.bffBooksRepository.getBooks(query);
    return data;
  }
}
