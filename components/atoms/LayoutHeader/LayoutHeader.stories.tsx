import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "~@/components/atoms";

import { LayoutHeader } from ".";


export default {
  title: "Atoms/LayoutHeader",
  component: LayoutHeader,
  argTypes: {},
} as ComponentMeta<typeof LayoutHeader>;

const Template: ComponentStory<typeof LayoutHeader> = (args) => (
  <Layout>
    <LayoutHeader {...args} />
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the Layout Header",
};
