import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "~@/components/atoms";

import { LayoutContent } from ".";


export default {
  title: "Atoms/LayoutContent",
  component: LayoutContent,
  argTypes: {},
} as ComponentMeta<typeof LayoutContent>;

const Template: ComponentStory<typeof LayoutContent> = (args) => (
  <Layout>
    <LayoutContent {...args} />
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the Layout Content",
};
