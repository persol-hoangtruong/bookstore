import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Col } from "../Col";
import { Input } from "../Input";
import { Row } from ".";


export default {
  title: "Atoms/Row",
  component: Row,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => (
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Input placeholder="firstname" />
    </Col>
    <Col span={12}>
      <Input placeholder="lastname" />
    </Col>
  </Row>
);

export const Primary = Template.bind({});
Primary.args = {};
