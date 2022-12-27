import { Input as AntInput } from "antd";
import { TextAreaProps as AntTextAreaProps } from "antd/lib/input";

import { SizeType } from "~@/constants/types";


declare const InputStatuses: ["warning", "error", ""];
declare type InputStatus = typeof InputStatuses[number];

interface ShowCountProps {
  formatter: (args: {
    value: string;
    count: number;
    maxLength?: number;
  }) => string;
}

export interface TextAreaProps extends AntTextAreaProps {
  allowClear?: boolean;
  bordered?: boolean;
  showCount?: boolean | ShowCountProps;
  size?: SizeType;
  disabled?: boolean;
  status?: InputStatus;
}

export function TextArea(props: TextAreaProps) {
  return <AntInput.TextArea {...props} />;
}
