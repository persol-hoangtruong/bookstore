import { css } from "@emotion/css";
import { useRouter } from "next/router";
import React from "react";

import { RegisterForm } from "~@/components/organisms/RegisterForm/RegisterForm";
import { useAuth } from "~@/contexts/authContext";


export default function Register() {
  const router = useRouter();
  const { user, register, loading } = useAuth();

  React.useEffect(() => {
    if (user) { router.push("/books"); }
  }, [router, user]);

  return (
    <>
      <div className={loginCss}>
        <div className={loginControlCss}>
          <RegisterForm onSubmit={register} loading={loading} />
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
