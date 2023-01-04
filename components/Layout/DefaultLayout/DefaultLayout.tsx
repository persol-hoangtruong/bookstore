import { css } from "@emotion/css";
import { useRouter } from "next/router";
import React from "react";

import Header from "~@/components/Layout/Header/Header";
import { useAuth } from "~@/contexts/authContext";


export declare interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const router = useRouter();
  const { user } = useAuth();

  const isLoginPage = router.asPath === "/login";
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    setIsAuthenticated(true);
  }, [router, user]);

  if (isLoginPage) {
    return (
      <div className={layoutCss}>
        {children}
      </div>
    );
  }

  return isAuthenticated ? (
    <div className={layoutCss}>
      <Header />
      {children}
    </div>
  ) : null;
}

// ===========================================================================
// STYLES
// ===========================================================================

const layoutCss = css([{
  maxWidth: "100%",
}]);
