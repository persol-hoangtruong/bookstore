import { css } from "@emotion/css";
import { useRouter } from "next/router";
import React from "react";

import { LoginForm } from "~@/components/organisms/LoginForm/LoginForm";
import { useAuth } from "~@/contexts/authContext";


export default function Login() {
  const router = useRouter();
  const { user, login, loading } = useAuth();

  React.useEffect(() => {
    if (user) { router.push("/books"); }
  }, [router, user]);

  return (
    <>
      <div className={loginCss}>
        <div className={loginControlCss}>
          <LoginForm onSubmit={login} loading={loading} />
        </div>
      </div>
    </>
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
