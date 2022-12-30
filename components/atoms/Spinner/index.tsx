import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import { ImSpinner2 } from "react-icons/im";


export function FullPageSpinner() {
  return (
    <div className={sinnerCss}>
      <Spinner />
    </div>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Spinner = styled(ImSpinner2)({
  animation: `${spin} 1s linear infinite`,
  width: "48px",
  height: "48px",
});

const sinnerCss = css`
  font-size: 4em;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
