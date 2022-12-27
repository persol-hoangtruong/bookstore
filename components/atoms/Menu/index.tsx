import { Menu as AntMenu, MenuProps as AntMenuProps } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";


export interface MenuProps extends AntMenuProps {
  items?: ItemType[];
}

export function Menu(props: MenuProps) {
  return <AntMenu {...props} />;
}
