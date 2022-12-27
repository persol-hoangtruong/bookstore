import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Col } from ".";


export default {
  title: "Atoms/Col",
  component: Col,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) => <Col {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  span: 24,
};
