import { css } from "@emotion/css";
import React from "react";

import { Button } from "~@/components/atoms/Button";
import { Form, useForm } from "~@/components/atoms/Form";
import { FormItem } from "~@/components/atoms/FormItem";
import { Input } from "~@/components/atoms/Input";


export declare type LoginForm = {
  username: string,
  password: string
}

export declare interface LoginFormProps {
  onSubmit: (values: LoginForm) => void;
  loading?: boolean;
}

export function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [form] = useForm();

  const handleSubmit = (values: LoginForm) => {
    onSubmit?.(values);
  };

  return (
    <Form
      form={form}
      className={loginCss}
      onFinish={handleSubmit}
    >
      <FormItem label="Username" name="username">
        <Input />
      </FormItem>
      <FormItem label="Password" name="password">
        <Input />
      </FormItem>
      <FormItem>
        <Button loading={loading} type="primary">Login</Button>
      </FormItem>
    </Form>
  );
}

// ===========================================================================
// STYLES
// ===========================================================================

const loginCss = css([{
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  "> div": {
    margin: "10px auto",
    width: "100%",
    maxWidth: "300px",
  },
}]);
