import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Spin } from ".";


export default {
  title: "Atoms/Spin",
  component: Spin,
  argTypes: {},
} as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = (args) => <Spin {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
