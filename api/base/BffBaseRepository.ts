import axios from "axios";


export abstract class BffBaseRepository {
  axiosClient;

  constructor() {
    this.axiosClient = axios;
  }
}
