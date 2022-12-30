import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";
import * as mq from "styles/media-queries";

import { Rating } from "~@/components/atoms/Rating/Rating";
import { Book } from "~@/models/books";
import * as colors from "~@/styles/colors";


export declare interface BookRowProps {
  book: Book;
}

// ===========================================================================
// MAIN
// ===========================================================================

export default function BookRow({ book }: BookRowProps) {
  const { title, author, coverImageUrl } = book;
  const id = `book-row-book-${book.id}`;

  return (
    <div className={bookRowCss}>
      <Link href={`/book/${book.id}`} className={linkCss}>
        <div className={linkControlCss}>
          <img src={coverImageUrl} alt={`${title} book cover`} className={imgCss} />
        </div>

        <div className={css([{ flex: 1 }])}>
          <div
            className={css([
              {
                display: "flex",
                justifyContent: "space-between",
              },
            ])}
          >
            <div className={css([{ flex: 1 }])}>
              <h2 id={id} className={titleCss}>
                {title}
              </h2>

              <Rating book={book} />
            </div>

            <div className={css([{ marginLeft: 10 }])}>
              <div className={authorCss}>{author}</div>
              <small>{book.publisher}</small>
            </div>
          </div>

          <p className={synopsisCss}>{book.synopsis.substring(0, 500)}...</p>
        </div>
      </Link>

      <div className={statusCss}>
        {/* <StatusButtons book={book} /> */}
      </div>
    </div>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const bookRowCss = css`
  display: "flex";
  align-items: "center";
  justify-content: "flex-end";
  position: "relative";
`;

const linkCss = css([
  {
    minHeight: 270,
    flexGrow: 2,
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gridGap: 20,
    borderBottom: `1px solid ${colors.gray20}`,
    color: colors.text,
    padding: "1.25em",
    textDecoration: "none",
  },
]);

const linkControlCss = css([
  {
    width: 140,
    height: "fit-content",
    [mq.small]: {
      width: 100,
    },
    display: "block",
    borderRadius: "3px",
    position: "relative",
    boxShadow: "0px 6px 12px rgb(0 0 0 / 30%)",
    transition: "transform 200ms ease-in, box-shadow 200ms ease-in",

    "&:hover": {
      boxShadow: "0px 11px 18px rgb(0 0 0 / 30%)",
      transform: "scale(1.025)",
    },
  },
]);

const imgCss = css([
  {
    maxHeight: "100%",
    width: "100%",
  },
]);

const titleCss = css([
  {
    fontSize: "1.25em",
    margin: "0",
    color: colors.indigo,
  },
]);

const authorCss = css([
  {
    marginTop: "0.4em",
    fontStyle: "italic",
    fontSize: "0.85em",
  },
]);

const synopsisCss = css([
  {
    whiteSpace: "break-spaces",
    display: "block",
  },
]);

const statusCss = css([
  {
    marginLeft: "20px",
    position: "absolute",
    right: -20,
    color: colors.gray80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
]);
