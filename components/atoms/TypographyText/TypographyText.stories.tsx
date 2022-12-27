import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TypographyText } from ".";


export default {
  title: "Atoms/TypographyText",
  component: TypographyText,
  argTypes: {},
} as ComponentMeta<typeof TypographyText>;

const Template: ComponentStory<typeof TypographyText> = (args) => (
  <TypographyText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the typography text",
  code: true,
};
