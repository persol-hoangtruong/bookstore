import { css } from "@emotion/css";
import React from "react";

import SpinnerMasterProps from "~@/components/molecules/SpinnerMaster/SpinnerMaster";
import BookRow from "~@/components/organisms/BookRow/BookRow";
import { Book } from "~@/models/books";
import { useGetBooks } from "~@/modules/Books/hooks/useGetBooks";


export default function Books() {
  const { data, isLoading } = useGetBooks();

  const renderBooks = React.useCallback((books: Book[]) => {
    if (!books) return null;

    return books.map((book: Book) => (
      <li key={book?.id} aria-label={book?.title}>
        <BookRow key={book?.id} book={book} />
      </li>
    ));
  }, []);

  return (
    <div className={bookCss}>
      {isLoading && <SpinnerMasterProps />}

      <div className={bookWrapperCss}>{renderBooks(data)}</div>
    </div>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const bookCss = css`
  width: 100%;
  margin-top: 48px;
`;

const bookWrapperCss = css([
  {
    margin: "0 auto",
    maxWidth: "790px",
    listStyle: "none",
    padding: "0",
    display: "grid",
    gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
    gridGap: "1em",
  },
]);
