import { Layout as AntLayout, LayoutProps as AntLayoutProps } from "antd";


export interface LayoutProps extends AntLayoutProps {
  prefixCls?: string;
  hasSider?: boolean;
}

export function Layout(props: LayoutProps) {
  return <AntLayout {...props} />;
}
