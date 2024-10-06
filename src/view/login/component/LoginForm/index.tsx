import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/view/index/component/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { loginSchema } from "../../api/schema";
import { contentStyle, formStyle } from "./index.css";

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const isError = !!Object.keys(form.formState.errors).length;
  const message = isError ? "아이디 혹은 비밀번호를 확인해주세요" : undefined;
  const disabled = !form.formState.isValid;

  const onSubmit = (_values: z.infer<typeof loginSchema>) => {
    // console.log({ values });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController
            form={form}
            name="id"
            type="input"
            showDescription
            descriptionPosition="top"
            descriptionProps={{
              isError,
              message,
            }}
            inputProps={{
              placeholder: "아이디",
            }}
          />
          <FormController
            form={form}
            name="password"
            type="input"
            inputProps={{
              placeholder: "비밀번호",
            }}
          />
        </div>
        <SubmitButton disabled={disabled}>로그인하기</SubmitButton>
      </form>
    </Form>
  );
};
export default LoginForm;
