import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "~@/components/atoms";

import { Popover } from ".";


export default {
  title: "Atoms/Popover",
  component: Popover,
  argTypes: {},
} as ComponentMeta<typeof Popover>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Template: ComponentStory<typeof Popover> = (args) => (
  <div>
    <Popover {...args} content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover {...args} content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover {...args} content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
