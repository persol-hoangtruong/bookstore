import { css } from "@emotion/css";
import React from "react";
import { FaStar } from "react-icons/fa";
import * as colors from "styles/colors";

import { Book } from "~@/models/books";


const visuallyHiddenCSS = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export declare interface RatingProps {
  book: Book;
}

function Rating({ book }: RatingProps) {
  const [isTabbing, setIsTabbing] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.key === "Tab") {
        setIsTabbing(true);
      }
    }
    document.addEventListener("keydown", handleKeyDown, { once: true });
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const rootClassName = `list-item-${book.id}`;

  const stars = Array.from({ length: 5 }).map((x, i) => {
    const ratingId = `rating-${book.id}-${i}`;
    const ratingValue = i + 1;

    return (
      <React.Fragment key={ratingId}>
        <input
          name={rootClassName}
          type="radio"
          id={ratingId}
          value={ratingValue}
          checked={ratingValue === book.rating}
          className={css([
            visuallyHiddenCSS,
            {
              [`.${rootClassName} &:checked ~ label`]: { color: colors.gray20 },
              [`.${rootClassName} &:checked + label`]: { color: colors.orange },
              [`.${rootClassName} &:hover ~ label`]: {
                color: `${colors.gray20} !important`,
              },
              [`.${rootClassName} &:hover + label`]: {
                color: "orange !important",
              },
              [`.${rootClassName} &:focus + label svg`]: {
                outline: isTabbing ?
                  ["1px solid orange", "-webkit-focus-ring-color auto 5px"] :
                  "initial",
              },
            },
          ])}
        />
        <label
          htmlFor={ratingId}
          className={css([
            {
              cursor: "pointer",
              color: (book?.rating || 0) < 0 ? colors.gray20 : colors.orange,
              margin: 0,
            },
          ])}
        >
          <span className={visuallyHiddenCSS}>
            {ratingValue} {ratingValue === 1 ? "star" : "stars"}
          </span>

          <FaStar
            className={css([
              {
                width: "16px",
                margin: "0 2px",
              },
            ])}
          />
        </label>
      </React.Fragment>
    );
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={css([
        rootClassName,
        {
          display: "inline-flex",
          alignItems: "center",
          [`&.${rootClassName}:hover input + label`]: {
            color: colors.orange,
          },
        },
      ])}
    >
      <span className={css([{ display: "flex" }])}>{stars}</span>
    </div>
  );
}

export { Rating };
