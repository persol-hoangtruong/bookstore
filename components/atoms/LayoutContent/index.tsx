import { Layout as AntLayout, LayoutProps as AntLayoutProps } from "antd";


export interface LayoutProps extends AntLayoutProps {
  prefixCls?: string;
}

export function LayoutContent(props: LayoutProps) {
  return <AntLayout.Content {...props} />;
}
