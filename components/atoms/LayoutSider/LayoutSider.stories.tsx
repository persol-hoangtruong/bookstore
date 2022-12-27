import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "~@/components/atoms";

import { LayoutSider } from ".";


export default {
  title: "Atoms/LayoutSider",
  component: LayoutSider,
  argTypes: {},
} as ComponentMeta<typeof LayoutSider>;

const Template: ComponentStory<typeof LayoutSider> = (args) => (
  <Layout>
    <LayoutSider {...args} />
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "This is the Layout Sider",
};
