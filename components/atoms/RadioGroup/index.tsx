import {
  Radio as AntRadio,
  RadioChangeEvent,
  RadioGroupProps as AntRadioGroupProps,
} from "antd";


export interface GroupProps extends AntRadioGroupProps {
  value?: any;
  defaultValue?: any;
  onChange?: (e: RadioChangeEvent) => void;
}

export function RadioGroup(props: GroupProps) {
  return <AntRadio.Group {...props} />;
}
