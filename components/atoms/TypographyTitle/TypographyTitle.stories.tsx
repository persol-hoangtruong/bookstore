import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TypographyTitle } from ".";


export default {
  title: "Atoms/TypographyTitle",
  component: TypographyTitle,
  argTypes: {},
} as ComponentMeta<typeof TypographyTitle>;

const Template: ComponentStory<typeof TypographyTitle> = (args) => (
  <TypographyTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the typography title",
  level: 2,
  code: true,
};
