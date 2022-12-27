import { Spin as AntSpin, SpinProps as AntSpinProps } from "antd";


declare const SpinSizes: ["small", "default", "large"];
export declare type SpinSize = typeof SpinSizes[number];
export declare type SpinIndicator = React.ReactElement<HTMLElement>;

export interface SpinProps extends AntSpinProps {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: React.ReactNode;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
  children?: React.ReactNode;
}

export function Spin(props: SpinProps) {
  return <AntSpin {...props} />;
}
