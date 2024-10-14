import { Form, FormController } from "@/shared/component/Form";
import useLoginForm from "@/shared/hook/useLoginForm";
import SubmitButton from "@/view/index/SubmitButton";
import { contentStyle, fieldStyle, formStyle } from "./index.css";

const LoginForm = () => {
  const { form, isError, message, isActive, handleSubmit, handleClick } =
    useLoginForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <FormController
            form={form}
            name="id"
            type="input"
            fieldProps={{
              placeholder: "아이디",
              className: fieldStyle,
            }}
            showDescription
            descriptionPosition="top"
            descriptionProps={{
              isError,
              message,
            }}
          />
          <FormController
            form={form}
            name="password"
            type="input"
            fieldProps={{
              placeholder: "비밀번호",
              className: fieldStyle,
            }}
          />
        </div>
        <SubmitButton isActive={isActive} onClick={handleClick}>
          로그인하기
        </SubmitButton>
      </form>
    </Form>
  );
};
export default LoginForm;
