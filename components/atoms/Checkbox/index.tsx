import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
} from "antd";
import React from "react";


export interface CheckboxProps extends AntCheckboxProps {
  value?: any;
  children?: React.ReactNode;
  autoFocus?: boolean;
  disabled?: boolean;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function Checkbox(props: CheckboxProps) {
  return <AntCheckbox {...props} />;
}
