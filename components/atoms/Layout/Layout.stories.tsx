import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
} from "~@/components/atoms";

import { Layout } from ".";


export default {
  title: "Atoms/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <LayoutSider>Sider</LayoutSider>
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
      <LayoutContent>Content</LayoutContent>
      <LayoutFooter>Footer</LayoutFooter>
    </Layout>
  </Layout>
);

export const Primary = Template.bind({});
Primary.args = {};
