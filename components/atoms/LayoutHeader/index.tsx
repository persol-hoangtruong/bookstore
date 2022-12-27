import { Layout as AntLayout, LayoutProps as AntLayoutProps } from "antd";


export interface LayoutProps extends AntLayoutProps {
  prefixCls?: string;
}

export function LayoutHeader(props: LayoutProps) {
  return <AntLayout.Header {...props} />;
}
