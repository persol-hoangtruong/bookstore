import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from ".";


export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Checkbox",
};
