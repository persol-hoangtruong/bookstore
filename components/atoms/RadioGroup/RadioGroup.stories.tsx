import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio } from "../Radio";
import { RadioGroup } from ".";


export default {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio value="bmw">BMW</Radio>
    <Radio value="audi">Audi</Radio>
    <Radio value="toyota">Toyota</Radio>
    <Radio value="volvo">Volvo</Radio>
  </RadioGroup>
);

export const Primary = Template.bind({});
Primary.args = {
  value: "audi",
};
