import { css } from "@emotion/css";
import React from "react";

import { Spinner } from "../../atoms";


export declare interface SpinnerMasterProps {
  spinner?: React.ReactNode;
  className?: string;
}

export default function SpinnerMaster({ spinner, className }: SpinnerMasterProps) {
  return <div className={css([className, loadingWrapperCss])}>{spinner || <Spinner />}</div>;
}

// ===========================================================================
// STYLES
// ===========================================================================

const loadingWrapperCss = css`
  width: 100vw;
  height: 100vh;
  user-select: none;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  opacity: 0.7;
  color: rgba(0, 0, 0, 0.88);
  background-color: rgba(0, 0, 0, 0.45);
`;
