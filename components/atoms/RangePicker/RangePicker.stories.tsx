import { ComponentMeta, ComponentStory } from "@storybook/react";
import moment from "moment";

import { RangePicker } from ".";


const dateFormat = "YYYY/MM/DD";

export default {
  title: "Atoms/RangePicker",
  component: RangePicker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RangePicker>;

const Template: ComponentStory<typeof RangePicker> = (args) => (
  <RangePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: [
    moment("2022/01/01", dateFormat),
    moment("2022/01/01", dateFormat),
  ],
  format: dateFormat,
};
