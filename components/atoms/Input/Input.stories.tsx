import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from ".";


export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} style={{ width: 220 }} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Error = Template.bind({});
Error.args = {
  status: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Typing ...",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Typing ...",
};
