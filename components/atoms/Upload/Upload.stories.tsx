import { UploadOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UploadFile } from "antd";

import { Button } from "~@/components/atoms";

import { Upload } from ".";


const fileList: UploadFile[] = [
  {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

export default {
  title: "Atoms/Upload",
  component: Upload,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Upload>;

const PreviewTemplate: ComponentStory<typeof Upload> = (args) => (
  <Upload {...args}>{fileList.length < 5 && "+ Upload"}</Upload>
);

const Template: ComponentStory<typeof Upload> = (args) => (
  <Upload {...args}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
};

export const Preview = PreviewTemplate.bind({});
Preview.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture-card",
  fileList: fileList,
};
