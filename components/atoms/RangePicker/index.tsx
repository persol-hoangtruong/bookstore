import { DatePicker as AntDatePicker } from "antd";
import { RangePickerProps as AntRangePickerProps } from "antd/lib/date-picker";


declare type DateType = any;
declare type CustomFormat = (value: DateType) => string;

export interface RangePickerProps {
  status?: "" | "warning" | "error" | undefined;
  placeholder?: string;
  allowClear?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  format?: string | CustomFormat | (string | CustomFormat)[];
}

export function RangePicker(props: RangePickerProps & AntRangePickerProps) {
  return <AntDatePicker.RangePicker {...props} />;
}
