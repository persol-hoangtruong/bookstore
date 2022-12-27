import { UserOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from ".";


export default {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 64,
  icon: <UserOutlined />,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  icon: <UserOutlined />,
};

export const Small = Template.bind({});
Large.args = {
  size: "small",
  icon: <UserOutlined />,
};
