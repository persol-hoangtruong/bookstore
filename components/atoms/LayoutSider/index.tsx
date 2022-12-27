import { Layout as AntLayout, SiderProps as AntSiderProps } from "antd";


export declare type CollapseType = "clickTrigger" | "responsive";
export declare type SiderTheme = "light" | "dark";

export interface SiderProps extends AntSiderProps {
  prefixCls?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  zeroWidthTriggerStyle?: React.CSSProperties;
  trigger?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number | string;
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  theme?: SiderTheme;
  onBreakpoint?: (broken: boolean) => void;
}

export function LayoutSider(props: SiderProps) {
  return <AntLayout.Sider {...props} />;
}
