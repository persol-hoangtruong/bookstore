import { css } from "@emotion/css";
import { useRouter } from "next/router";
import React from "react";

import { Button } from "~@/components/atoms/Button";
import { Form, useForm } from "~@/components/atoms/Form";
import { FormItem } from "~@/components/atoms/FormItem";
import { Input } from "~@/components/atoms/Input";


export declare type LoginForm = {
  email: string,
  password: string
}

export declare interface LoginFormProps {
  onSubmit: (values: LoginForm) => void;
  loading?: boolean;
}

export function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const router = useRouter();
  const [form] = useForm();

  const handleSubmit = (values: LoginForm) => {
    onSubmit?.(values);
  };

  const onRegisterClick = () => {
    router.push("/register");
  };

  return (
    <Form
      layout="vertical"
      form={form}
      className={loginCss}
      onFinish={handleSubmit}
    >
      <FormItem
        label="Email"
        name="email"
        rules={[{
          type: "email",
          required: true,
          message: "Please Email must not be empty",
        }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please Password must not be empty",
          },
        ]}
      >
        <Input type="password" />
      </FormItem>

      <FormItem className={buttonGroupCss}>
        <Button htmlType="submit" loading={loading} type="primary">Login</Button>
        <Button disabled={loading} onClick={onRegisterClick}>Register</Button>
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

const buttonGroupCss = css([{
  "button + button": {
    marginLeft: "16px",
  },
}]);
