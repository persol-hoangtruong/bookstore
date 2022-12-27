import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import { Space } from ".";


export default {
  title: "Atoms/Space",
  component: Space,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    <Button>Yes</Button>
    <Button>No</Button>
  </Space>
);

export const Primary = Template.bind({});
Primary.args = {};
