import { Input as AntInput, InputProps as AntInputProps } from "antd";


declare type VisibilityToggle = {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
};

export interface PasswordProps extends AntInputProps {
  readonly inputPrefixCls?: string;
  readonly action?: string;
  visibilityToggle?: boolean | VisibilityToggle;
  iconRender?: (visible: boolean) => React.ReactNode;
}

export function InputPassword(props: PasswordProps) {
  return <AntInput.Password {...props} data-testid="input-password-atom" />;
}
