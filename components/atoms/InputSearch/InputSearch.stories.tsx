import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InputSearch } from ".";


export default {
  title: "Atoms/InputSearch",
  component: InputSearch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputSearch>;

const InputSearchTemplate: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} style={{ width: 220 }} />
);

export const Primary = InputSearchTemplate.bind({});
Primary.args = {};
