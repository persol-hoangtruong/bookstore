import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, FormItem, Input, InputPassword } from "~@/components/atoms";

import { Form } from ".";


export default {
  title: "atoms/Form",
  component: Form,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <FormItem
      label="Username"
      name="username"
      rules={[{
        required: true,
        message: "Please input your username!",
      }]}
    >
      <Input />
    </FormItem>
    <FormItem
      label="Password"
      name="password"
      rules={[{
        required: true,
        message: "Please input your password!",
      }]}
    >
      <InputPassword />
    </FormItem>
    <FormItem wrapperCol={{
      offset: 8,
      span: 16,
    }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </FormItem>
  </Form>
);

export const Basic = Template.bind({});
Basic.args = {
  name: "basic",
  initialValues: {
    username: "hoang.truong",
    password: "hoang.truong",
  },
};
