import { Form, FormInstance, FormItemProps as AntFormItemProps } from "antd";
import { RuleObject } from "antd/lib/form";
import { NamePath, StoreValue } from "antd/lib/form/interface";
import { ReactElement } from "react";


declare type Validator = (
  rule: RuleObject,
  value: StoreValue,
  callback: (error?: string) => void
) => Promise<void | any> | void;

export interface ValidatorRule {
  warningOnly?: boolean;
  message?: string | ReactElement;
  validator?: Validator;
}

declare type RenderChildren<Values = any> = (
  form: FormInstance<Values>
) => React.ReactNode;

declare type ChildrenType<Values = any> =
  | RenderChildren<Values>
  | React.ReactNode;

export interface FormItemProps {
  children?: ChildrenType;
  id?: string;
  initialValue?: any;
  required?: boolean;
  hidden?: boolean;
  name?: string | NamePath;
  rules?: ValidatorRule[];
}

export function FormItem(props: FormItemProps & AntFormItemProps) {
  return <Form.Item {...props} />;
}
