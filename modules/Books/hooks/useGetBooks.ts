import { useQuery } from "@tanstack/react-query";

import { useClient } from "~@/contexts/authContext";
import { Book } from "~@/models/books";


export function useGetBooks({ onCompleted }: { [key: string]: any } = {}) {
  const client = useClient();

  const { data, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => client("/api/books"),
    onSuccess: onCompleted,
    onError: onCompleted,
  });

  const books = data?.data?.map?.((book: Book) => ({
    ...book,
    rating: 1,
  }));

  return {
    data: books,
    error: error,
    isLoading: isLoading,
  };
}

const QUERY_KEY = "GET_BOOKS";
