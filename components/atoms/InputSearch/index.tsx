import { Input as AntInput, InputProps as AntInputProps } from "antd";


export interface SearchProps extends AntInputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<HTMLElement>
    | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}

export function InputSearch(props: SearchProps) {
  return <AntInput.Search {...props} />;
}
