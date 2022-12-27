import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import { FaSpinner } from "react-icons/fa";


export function FullPageSpinner() {
  return (
    <div className={sinnerCss}>
      <Spinner />
    </div>
  );
}

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});

const sinnerCss = css`
  font-size: 4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// export const Spinner = styled(FaSpinner)(_Spinner);

// function _Spinner() {
//   return {
//     animation: `${spin} 1s linear infinite`,
//   });
// }

// Spinner.defaultProps = {
//   "aria-label": "loading",
// };

// ===========================================================================
// STYLES
// ===========================================================================
