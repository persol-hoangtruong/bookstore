import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio } from ".";


export default {
  title: "Atoms/Radio",
  component: Radio,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}>Apple</Radio>
);

export const Primary = Template.bind({});
Primary.args = {};
