import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TypographyParagraph } from ".";


export default {
  title: "Atoms/TypographyParagraph",
  component: TypographyParagraph,
  argTypes: {},
} as ComponentMeta<typeof TypographyParagraph>;

const Template: ComponentStory<typeof TypographyParagraph> = (args) => (
  <TypographyParagraph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the typography paragraph",
  code: true,
};
