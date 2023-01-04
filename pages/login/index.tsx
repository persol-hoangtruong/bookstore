import { css } from "@emotion/css";
import React from "react";

import { LoginForm } from "~@/components/organisms/LoginForm/LoginForm";


export default function Login() {
  return (
    <div className={loginCss}>
      <div className={loginControlCss}>
        <LoginForm onSubmit={(values) => console.log({ values: values })} />
      </div>
    </div>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const loginCss = css([
  {
    width: "100vw",
    height: "calc(100vh - 64px)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

const loginControlCss = css([
  {
    height: "fit-content",
    minWidth: "637px",
    padding: "48px 0",
    transform: "translateY(-100px)",

    border: "1px solid #ebeef5",
    borderRadius: "4px",
    boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)",
  },
]);
