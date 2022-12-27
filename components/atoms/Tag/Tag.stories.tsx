import { CheckCircleOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from ".";


export default {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Success = Template.bind({});
Success.args = {
  color: "success",
  children: "Success",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
  children: "Error",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  children: "Warning",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <CheckCircleOutlined />,
  color: "success",
  children: "Success",
};
