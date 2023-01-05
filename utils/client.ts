import { QueryCache } from "@tanstack/react-query";

import { firebaseAuth } from "./authProvider";


const queryCache = new QueryCache();

export declare interface ClientConfig {
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

  return fetch(endpoint, config).then(async (res) => {
    if (res.status === 401) {
      queryCache.clear();
      await firebaseAuth.signOut();
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: "Please re-authenticate" });
    }

    const data = await res.json();
    if (res.ok) return data;
    return Promise.reject(data);
  });
}
