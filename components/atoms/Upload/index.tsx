import {
  Upload as AntUpload,
  UploadFile as AntUploadFile,
  UploadProps as AntUploadProps,
} from "antd";
import { ShowUploadListInterface } from "antd/lib/upload/interface";


declare type UploadType = "drag" | "select";
declare type T = any;

export interface UploadProps extends AntUploadProps {
  type?: UploadType;
  name?: string;
  disabled?: boolean;
  defaultFileList?: Array<AntUploadFile<T>>;
  fileList?: Array<AntUploadFile<T>>;
  showUploadList?: boolean | ShowUploadListInterface;
  multiple?: boolean;
  data?:
  | Record<string, unknown>
  | ((
    file: AntUploadFile<T>
  ) => Record<string, unknown> | Promise<Record<string, unknown>>);
}

export function Upload(props: UploadProps) {
  return <AntUpload {...props} />;
}
