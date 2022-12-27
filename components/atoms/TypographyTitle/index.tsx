import { Typography as AntTypography } from "antd";
import { TitleProps } from "antd/lib/typography/Title";

import { TypographyProps } from "~@/constants/types";


export function TypographyTitle({ ...rest }: TypographyProps & TitleProps) {
  return <AntTypography.Title {...rest} />;
}
