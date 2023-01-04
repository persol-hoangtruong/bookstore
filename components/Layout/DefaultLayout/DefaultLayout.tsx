import { css } from "@emotion/css";
import React from "react";

import Header from "~@/components/Layout/Header/Header";


export declare interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {

  return (
    <div className={layoutCss}>
      <Header />
      {children}
    </div>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const layoutCss = css([{
  maxWidth: "100%",
}]);
