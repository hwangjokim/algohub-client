import type { groupSchema } from "@/shared/api/schema";
import DateFormController from "@/shared/component/GroupInfoForm/DateFormController";
import NameFormController from "@/shared/component/GroupInfoForm/NameFormController";
import {
  dateWrapper,
  formLabelStyle,
  formStyle,
} from "@/shared/component/GroupInfoForm/index.css";
import { Form, type UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export type GroupFormProps = {
  children?: React.ReactNode;
  form: UseFormReturn<z.infer<typeof groupSchema>>;
  variant?: "create-group" | "group-setting";
};

const GroupInfoForm = ({
  children,
  form,
  variant = "create-group",
}: GroupFormProps) => {
  const handleSubmit = (values: z.infer<typeof groupSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form} className={formStyle({ variant })}>
      <form
        className={formStyle({ variant })}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <NameFormController form={form} variant={variant} />
        <div>
          <p className={formLabelStyle({ variant })}>스터디 기간</p>
          <div className={dateWrapper}>
            <DateFormController
              form={form}
              variant={variant}
              dateType="startDate"
            />
            <DateFormController
              form={form}
              variant={variant}
              dateType="endDate"
            />
          </div>
        </div>
        {children}
      </form>
    </Form>
  );
};

export default GroupInfoForm;
