import Button from "@/common/component/Button";
import SupportingText from "@/common/component/SupportingText";
import { useToast } from "@/common/hook/useToast";
import { Form } from "@/shared/component/Form";
import DateFormController from "@/view/group/problem-list/component/RegisterForm/DateFormController";
import LinkFormController from "@/view/group/problem-list/component/RegisterForm/LinkFormController";
import {
  dateFormWrapper,
  formStyle,
  labelStyle,
  registerWrapper,
  titleStyle,
} from "@/view/group/problem-list/component/RegisterForm/index.css";
import { registerProblemSchema } from "@/view/group/problem-list/component/RegisterForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type RegisterFormProps = {
  variant?: "default" | "secondary";
};
const RegisterForm = ({ variant = "default" }: RegisterFormProps) => {
  const { showToast } = useToast();
  const form = useForm<z.infer<typeof registerProblemSchema>>({
    resolver: zodResolver(registerProblemSchema),
    mode: "onSubmit",
  });

  const handleSubmit = (values: z.infer<typeof registerProblemSchema>) => {
    console.log({ values });
    showToast("문제가 정상적으로 등록되었어요.", "success");
  };
  const title = variant === "default" ? "문제 등록하기" : "문제 수정하기";
  return (
    <div className={registerWrapper}>
      <p className={titleStyle}>{title}</p>
      <Form {...form}>
        <form className={formStyle} onSubmit={form.handleSubmit(handleSubmit)}>
          <LinkFormController form={form} />
          <div>
            <p className={labelStyle}>풀이 기간</p>
            <div className={dateFormWrapper}>
              <DateFormController form={form} dateType="startDate" />
              <DateFormController form={form} dateType="endDate" />
            </div>
            {!!form.formState.errors.endDate && (
              <SupportingText
                isError
                hasErrorIcon
                message={form.formState.errors.endDate.message}
              />
            )}
          </div>
        </form>
        <Button
          type="submit"
          size="large"
          disabled={!form.formState.isValid}
          isActive={form.formState.isValid}
        >
          {title}
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
