import { Tag as AntTag, TagProps as AntTagProps } from "antd";
import { PresetColorType, PresetStatusColorType } from "antd/es/_util/colors";
import { LiteralUnion } from "antd/es/_util/type";


export interface TagProps extends AntTagProps {
  icon?: React.ReactNode;
  visible?: boolean;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType, string>;
}

export function Tag(props: TagProps) {
  return <AntTag {...props} />;
}
