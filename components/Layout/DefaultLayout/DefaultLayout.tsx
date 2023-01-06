import { css } from "@emotion/css";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";

import Header from "~@/components/Layout/Header/Header";
import { useAuth } from "~@/contexts/authContext";
import { firebaseAuth } from "~@/utils/authProvider";


export declare interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const router = useRouter();
  const isLoginPage = router.asPath === "/login";

  const { setUser } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);


  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const authStateChanged = onAuthStateChanged(firebaseAuth, async (user: any) => {
      const {
        uid,
        email,
        photoURL,
        displayName,
        phoneNumber,
      } = user || {};


      // eslint-disable-next-line no-unused-expressions
      if (!user && !isLoginPage) {
        await router.push("/login");
        return;
      }

      setUser({
        uid: uid,
        email: email,
        photoURL: photoURL,
        displayName: displayName,
        phoneNumber: phoneNumber,
      });

      setIsAuthenticated(true);
    });

    return () => {
      authStateChanged();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <div className={bodyCss}>
        {children}
      </div>
    </div>
  ) : null;
}

// ===========================================================================
// STYLES
// ===========================================================================

const layoutCss = css([{
  maxWidth: "100%",
}]);

const bodyCss = css`
  flex: auto;
  min-height: 0;
  overflow-x: hidden;
`;
