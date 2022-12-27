import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "~@/components/atoms";

import { Tooltip } from ".";


export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button>Align edge / 边缘对齐</Button>
  </Tooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  placement: "topLeft",
  title: "Prompt Text",
};
