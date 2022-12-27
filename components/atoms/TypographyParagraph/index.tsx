import { Typography as AntTypography } from "antd";
import { ParagraphProps } from "antd/lib/typography/Paragraph";

import { TypographyProps } from "~@/constants/types";


export function TypographyParagraph({
  ...rest
}: TypographyProps & ParagraphProps) {
  return <AntTypography.Paragraph {...rest} />;
}
