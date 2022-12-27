import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InputPassword } from ".";


export default {
  title: "Atoms/InputPassword",
  component: InputPassword,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} style={{ width: 220 }} />
);

export const Primary = Template.bind({});
Primary.args = {};
