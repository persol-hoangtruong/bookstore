import { Input as AntInput, InputProps as AntInputProps } from "antd";

import { SizeType } from "~@/constants/types";


declare const InputStatuses: ["warning", "error", ""];
export declare type InputStatus = typeof InputStatuses[number];

export interface InputProps extends AntInputProps {
  size?: SizeType;
  status?: InputStatus;
  disabled?: boolean;
  bordered?: boolean;
}

export function Input(props: InputProps) {
  return <AntInput {...props} data-testid="input-atom" />;
}

export type { SizeType };
