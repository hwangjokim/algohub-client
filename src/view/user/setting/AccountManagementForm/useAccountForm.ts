import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { AccountManagementSchema } from "./schema";

const useAccountForm = () => {
  const form = useForm<z.infer<typeof AccountManagementSchema>>({
    resolver: zodResolver(AccountManagementSchema),
    mode: "onChange",
    defaultValues: {
      id: "yerinbaek",
      password: "1234^aaa",
      confirmPassword: "1234^aaa",
    },
  });

  const handleSubmit = (_values: z.infer<typeof AccountManagementSchema>) => {};

  const isActive = form.formState.isDirty && form.formState.isValid;

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useAccountForm;
