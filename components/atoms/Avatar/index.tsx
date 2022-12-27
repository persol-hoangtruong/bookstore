import { Avatar as AntAvatar, AvatarProps as AntAvatarAntProps } from "antd";
// import { ScreenSizeMap } from "antd/lib/_util/responsiveObserve";


export declare type AvatarSize =
  | "large"
  | "small"
  | "default"
  | number

export interface AvatarProps extends AntAvatarAntProps {
  alt?: string;
  src?: React.ReactNode;
  size?: AvatarSize;
  icon?: React.ReactNode;
  shape?: "circle" | "square";
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

export function Avatar(props: AvatarProps) {
  return <AntAvatar {...props} />;
}
