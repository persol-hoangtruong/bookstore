import { Space as AntSpace, SpaceProps as AntSpaceProps } from "antd";

import { SizeType } from "~@/constants/types";


export declare type SpaceSize = SizeType | number;
export interface SpaceProps extends AntSpaceProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
  children?: React.ReactNode;
}

export function Space(props: SpaceProps) {
  return <AntSpace {...props}>{props.children}</AntSpace>;
}
