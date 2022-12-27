import {
  Radio as AntRadio,
  RadioChangeEvent,
  RadioProps as AntRadioProps,
} from "antd";

import { SizeType } from "~@/constants/types";


declare type DisabledType = true | false | undefined;

export interface RadioProps extends AntRadioProps {
  value?: any;
  defaultValue?: any;
  onChange?: (e: RadioChangeEvent) => void;
  size?: SizeType;
  disabled?: DisabledType;
}

export function Radio(props: RadioProps) {
  return <AntRadio {...props} />;
}
