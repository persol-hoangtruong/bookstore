import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";


export declare type FilterFunc<OptionType> = (
  inputValue: string,
  option?: OptionType
) => boolean;

export interface BaseOptionType {
  disabled?: boolean;
  [name: string]: any;
}

export interface DefaultOptionType extends BaseOptionType {
  label: React.ReactNode;
  value?: string | number | null;
  children?: Omit<DefaultOptionType, "children">[];
}

export interface SelectProps<
  OptionType extends BaseOptionType = DefaultOptionType
> {
  inputValue?: string;
  searchValue?: string;
  children?: React.ReactNode;
  filterOption?: boolean | FilterFunc<OptionType>;
}

export function Select(props: SelectProps & AntSelectProps) {
  return <AntSelect {...props} />;
}
