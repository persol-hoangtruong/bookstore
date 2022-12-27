import {
  Popconfirm as AntPopConfirm,
  PopconfirmProps as AntPopConfirmProps,
} from "antd";
import { LegacyButtonType } from "antd/lib/button/button";
import { RenderFunction } from "antd/lib/tooltip";


export interface PopconfirmProps extends AntPopConfirmProps {
  title: React.ReactNode | RenderFunction;
  icon?: React.ReactNode;
  disabled?: boolean;

  okText?: React.ReactNode;
  okType?: LegacyButtonType;
  cancelText?: React.ReactNode;

  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export function Popconfirm(props: PopconfirmProps) {
  return <AntPopConfirm {...props} />;
}
