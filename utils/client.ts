import { QueryCache } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

import { firebaseAuth } from "./authProvider";


const queryCache = new QueryCache();

export declare interface ClientConfig extends AxiosRequestConfig {
  data?: any;
  token?: string;
  headers?: any;
}

export async function client(
  endpoint: string,
  { data: body, token, headers, ...customConfig }: ClientConfig = {},
) {
  const config = {
    method: body ? "POST" : "GET",
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-type": body ? "application/json" : undefined,
      ...headers,
    },
    ...customConfig,
  };

  return axios(endpoint, {
    ...config,
  }).then(async (res) => {
    if (res.status === 401) {
      queryCache.clear();
      await firebaseAuth.signOut();
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: "Please re-authenticate" });
    }

    const data = await res.data;
    if (res.statusText === "OK") return data;
    return Promise.reject(data);
  });
}
