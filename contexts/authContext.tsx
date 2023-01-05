import { message } from "antd";
import React from "react";

import { User } from "~@/constants/types";
import * as auth from "~@/utils/authProvider";


export declare type UserCredential = {
  email: string;
  password: string;
}

export declare interface AuthContext {
  user: User | undefined;
  error: string | undefined;
  login: (user: UserCredential) => void;
  logOut: () => void;
  register: (user: UserCredential) => void;
  setUser: (user: User) => void;
  loading: boolean;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [messageApi, contextHolder] = message.useMessage();

  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [error, setError] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);


  const login = React.useCallback(
    (userCredential: UserCredential) => {
      setLoading(true);
      auth.login(userCredential).then((res: any) => {
        const {
          uid,
          email,
          photoURL,
          displayName,
          phoneNumber,
        } = res?.user || {};

        setUser({
          uid: uid,
          email: email,
          photoURL: photoURL,
          displayName: displayName,
          phoneNumber: phoneNumber,
        });

        setError(undefined);
        setLoading(false);
      }).catch(({ code }) => {
        setError(code);
        setUser(undefined);
        setLoading(false);

        messageApi.error(code);
      });
    },
    [messageApi],
  );

  const register = React.useCallback(
    (userCredential: UserCredential) => {
      setLoading(true);

      auth.register(userCredential).then((res: any) => {
        setUser(res?.user as unknown as User);
        setError(undefined);
        setLoading(false);
      }).catch(({ code }) => {
        setError(code);
        setUser(undefined);
        setLoading(false);

        messageApi.error(code);
      });
    },
    [messageApi],
  );

  const logOut = React.useCallback(() => {
    setLoading(true);
    auth.signOut().then(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(false);
    });
  }, []);

  const value = React.useMemo(() => ({
    user: user,
    error: error,
    loading: loading,
    login: login,
    logOut: logOut,
    setUser: setUser,
    register: register,
  }), [user, error, loading, login, logOut, register]);

  return (
    <>
      {contextHolder}
      <AuthContext.Provider value={value}>{children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context === undefined) throw new Error("useAuth must be use within AuthProvider");
  return context as AuthContext;
}

