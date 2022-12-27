import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Menu } from ".";


export default {
  title: "Atoms/Menu",
  component: Menu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});

const items = [
  {
    label: "item 1",
    key: "item-1",
  }, // remember to pass the key prop
  {
    label: "item 2",
    key: "item-2",
  }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [{
      label: "item 3",
      key: "submenu-item-1",
    }],
  },
];

// ===========================================================================
// BINDING
// ===========================================================================

Primary.args = {
  items: items,
};
