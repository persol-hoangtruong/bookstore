import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from ".";


export default {
  title: "Atoms/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} style={{ width: 120 }} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "jenifer",
      label: "Jenifer",
    },
  ],
  defaultValue: "lucy",
};
