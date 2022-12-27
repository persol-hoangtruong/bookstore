import { Row as AntRow, RowProps as AntRowProps } from "antd";
import { Gutter } from "antd/lib/grid/row";


declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: [
  "start",
  "end",
  "center",
  "space-around",
  "space-between",
  "space-evenly"
];
declare type Responsive = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
declare type ResponsiveLike<T> = {
  [key in Responsive]?: T;
};
declare type ResponsiveAligns = ResponsiveLike<typeof RowAligns[number]>;
declare type ResponsiveJustify = ResponsiveLike<typeof RowJustify[number]>;

export interface RowProps extends AntRowProps {
  gutter?: Gutter | [Gutter, Gutter];
  align?: typeof RowAligns[number] | ResponsiveAligns;
  justify?: typeof RowJustify[number] | ResponsiveJustify;
  prefixCls?: string;
  wrap?: boolean;
}

export function Row(props: RowProps) {
  return <AntRow {...props} />;
}
