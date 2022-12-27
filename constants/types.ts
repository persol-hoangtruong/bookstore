import { TooltipProps } from "antd";


export enum AuthTypes {
  Initial = "INITIALIZE",
  Signin = "SIGNIN",
  Signout = "SIGNOUT",
  Signup = "SIGNUP",
}

export interface User {
  username: string;
}

export type AuthUser = null | User;

export type JWTAuthPayload = {
  [AuthTypes.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [AuthTypes.Signin]: {
    user: AuthUser;
  };
  [AuthTypes.Signout]: undefined;
  [AuthTypes.Signup]: {
    user: AuthUser;
  };
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload: M[Key];
    };
};

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: "jwt";
};

export type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

export type NotificationType = "success" | "info" | "warning" | "error";

export interface SigninParams {
  username: string;
  password: string;
}
export interface SigninResponse {
  access_token: string;
  username: string;
}

export type SignupParams = SigninParams;

export type SizeType = "small" | "middle" | "large" | undefined;

export declare type BaseType = "secondary" | "success" | "warning" | "danger";
export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: React.MouseEventHandler<HTMLElement>;
  onEllipsis?: (ellipsis: boolean) => void;
  tooltip?: React.ReactNode | TooltipProps;
}
export interface TypographyProps {
  className?: string;
  title?: string;
  type?: BaseType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisConfig;
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}
