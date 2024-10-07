import { groupSchema } from "@/shared/api/schema";
import GroupInfoForm from "@/shared/component/GroupInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const CreateGroupForm = () => {
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      image: "",
      name: "ㅎㅇ",
      startDate: new Date(),
      endDate: new Date(),
      desc: "",
    },
  });

  return (
    <GroupInfoForm form={form}>
      <button disabled={!form.formState.isValid}>제출하기</button>
    </GroupInfoForm>
  );
};

export default CreateGroupForm;
