import { Affix as AntAffix, AffixProps as AntAffixProps } from "antd";


export interface AffixProps extends AntAffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  style?: React.CSSProperties;
  onChange?: (affixed?: boolean) => void;
  target?: () => Window | HTMLElement | null;
  prefixCls?: string;
  className?: string;
  children: React.ReactNode;
}

export function Affix(props: AffixProps) {
  return <AntAffix {...props}>{props.children}</AntAffix>;
}
