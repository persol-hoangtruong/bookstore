import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
} from "antd";


declare type CustomFormat<DateType> = (value: DateType) => string;

export interface DatePickerProps {
  status?: "" | "warning" | "error" | undefined;
  placeholder?: string;
  allowClear?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  format?:
  | string
  | CustomFormat<any>
  | (string | CustomFormat<any>)[];
}

export function DatePicker(props: DatePickerProps & AntDatePickerProps) {
  return <AntDatePicker {...props} />;
}
