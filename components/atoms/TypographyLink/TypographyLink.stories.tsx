import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TypographyLink } from ".";


export default {
  title: "Atoms/TypographyLink",
  component: TypographyLink,
  argTypes: {},
} as ComponentMeta<typeof TypographyLink>;

const Template: ComponentStory<typeof TypographyLink> = (args) => (
  <TypographyLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the link",
  href: "https://ant.design",
  target: "_blank",
};
