import "~@/styles/globals.scss";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import React from "react";

import DefaultLayout from "~@/components/Layout/DefaultLayout/DefaultLayout";
import { AuthProvider } from "~@/contexts/authContext";

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DefaultLayout>
          <Component {...pageProps} />;
        </DefaultLayout>
      </AuthProvider>
    </QueryClientProvider>
  );
}
