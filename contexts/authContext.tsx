import React from "react";


export declare type User = {
  token: string;
};

export declare interface AuthContext {
  user: User | undefined;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user] = React.useState<User | undefined>(undefined);

  const value = React.useMemo(() => ({
    user: user,
  }), [user]);

  return (
    <AuthContext.Provider value={value}>{children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context === undefined) throw new Error("useAuth must be use within AuthProvider");
  return context || { user: undefined };
}

