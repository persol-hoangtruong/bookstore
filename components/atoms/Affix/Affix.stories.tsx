import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import { Affix } from ".";


export default {
  title: "Atoms/Affix",
  component: Affix,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Affix>;

const Template: ComponentStory<typeof Affix> = () => (
  <div className="scrollable-container">
    <div className="background">
      <Affix>
        <div style={{ height: "150vh" }}>
          <Button type="primary">Fixed at the top of container</Button>
        </div>
      </Affix>
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
