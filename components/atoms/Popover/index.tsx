import { Popover as AntPopover, PopoverProps as AntPopoverProps } from "antd";


declare type RenderFunction = () => React.ReactNode;

export interface PopoverProps extends AntPopoverProps {
  title?: React.ReactNode | RenderFunction;
  content?: React.ReactNode | RenderFunction;
}

export function Popover(props: PopoverProps) {
  return <AntPopover {...props} />;
}
