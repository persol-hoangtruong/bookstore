import { Typography as AntTypography } from "antd";
import { TextProps } from "antd/lib/typography/Text";

import { TypographyProps } from "~@/constants/types";


export function TypographyText({ ...rest }: TypographyProps & TextProps) {
  return <AntTypography.Text {...rest} />;
}
