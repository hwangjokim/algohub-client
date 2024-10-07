import type { groupSchema } from "@/shared/api/schema";
import NameFormController from "@/shared/component/GroupInfoForm/NameFormController";
import { formStyle } from "@/shared/component/GroupInfoForm/index.css";
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
        {children}
      </form>
    </Form>
  );
};

export default GroupInfoForm;
