import { ComponentMeta, ComponentStory } from "@storybook/react";
import moment from "moment";

import { DatePicker } from ".";


const dateFormat = "YYYY/MM/DD";

export default {
  title: "Atoms/DatePicker",
  component: DatePicker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: moment("2022/01/01", dateFormat),
  format: dateFormat,
};
