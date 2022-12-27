import { Layout as AntLayout, LayoutProps as AntLayoutProps } from "antd";


export interface LayoutProps extends AntLayoutProps {
  prefixCls?: string;
}

export function LayoutFooter(props: LayoutProps) {
  return <AntLayout.Footer {...props} />;
}
