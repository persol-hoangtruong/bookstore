import { Form, FormInstance } from "antd";
import { FormListProps as AntFormListProps, RuleObject } from "antd/lib/form";
import { StoreValue } from "antd/lib/form/interface";
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

export interface FormListProps {
  children?: ChildrenType;
  id?: string;
  initialValue?: any;
  required?: boolean;
  hidden?: boolean;
  name?: string;
  rules?: ValidatorRule[];
}

export function FormList(props: FormListProps & AntFormListProps) {
  return <Form.List {...props} />;
}
