import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextArea } from ".";


export default {
  title: "Atoms/TextArea",
  component: TextArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} style={{ width: 220 }} />
);

export const Primary = Template.bind({});
Primary.args = {};
