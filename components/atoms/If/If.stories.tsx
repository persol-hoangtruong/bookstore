import { ComponentMeta, ComponentStory } from "@storybook/react";

import { If } from ".";


export default {
  title: "Atoms/If",
  component: If,
  argTypes: {},
} as ComponentMeta<typeof If>;

const Template: ComponentStory<typeof If> = (args) => <If {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  condition: true,
  children: <div>This component used for condition render</div>,
};
