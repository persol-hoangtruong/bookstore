import { QuestionCircleOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Popconfirm } from ".";


export default {
  title: "Atoms/Popconfirm",
  component: Popconfirm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Popconfirm>;

const Template: ComponentStory<typeof Popconfirm> = (args) => (
  <Popconfirm {...args}>
    <a href="#">Delete</a>
  </Popconfirm>
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Are you sure？",
  icon: <QuestionCircleOutlined style={{ color: "red" }} />,
};
