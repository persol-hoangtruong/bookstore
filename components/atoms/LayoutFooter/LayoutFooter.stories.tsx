import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "~@/components/atoms";

import { LayoutFooter } from ".";


export default {
  title: "Atoms/LayoutFooter",
  component: LayoutFooter,
  argTypes: {},
} as ComponentMeta<typeof LayoutFooter>;

const Template: ComponentStory<typeof LayoutFooter> = (args) => (
  <Layout>
    <LayoutFooter {...args} />
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the Layout Footer",
};
