import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { LiteralUnion } from "antd/lib/_util/type";
import { RenderFunction } from "antd/lib/tooltip";


declare type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export interface TooltipProps {
  title?: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
  color?: LiteralUnion<PresetColorType, string>;
  children?: React.ReactNode;
  placement?: TooltipPlacement;
}

export function Tooltip(props: TooltipProps & AntTooltipProps) {
  return <AntTooltip {...props} />;
}
