import {
  Form as AntForm,
  FormInstance,
  FormListFieldData,
  FormProps as AntFormProps,
} from "antd";


export declare type FormLayout = "horizontal" | "inline" | "vertical";
export interface FormProps<Values = any> extends AntFormProps {
  form?: FormInstance<Values>;
  layout?: FormLayout;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Form(props: FormProps) {
  return <AntForm {...props} />;
}

export function useForm<Values = any>(): [FormInstance<Values>] {
  return AntForm.useForm();
}

export function useFormInstance() {
  return AntForm.useFormInstance();
}

export type { FormListFieldData };
