import { Typography as AntTypography } from "antd";
import { LinkProps } from "antd/lib/typography/Link";

import { TypographyProps } from "~@/constants/types";


export function TypographyLink({ ...rest }: TypographyProps & LinkProps) {
  return <AntTypography.Link {...rest} />;
}
