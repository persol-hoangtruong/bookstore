import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { ReactElement } from "react";


declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];

export declare type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps extends AntButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: ReactElement | string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <AntButton {...rest}>{children}</AntButton>;
}
