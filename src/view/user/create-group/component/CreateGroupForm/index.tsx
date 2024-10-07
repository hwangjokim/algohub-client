import { groupSchema } from "@/shared/api/schema";
import GroupInfoForm from "@/shared/component/GroupInfoForm";
import { formatDate } from "@/shared/util/date";
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
      startDate: formatDate(new Date()),
      endDate: formatDate(new Date()),
      desc: "해당 스터디는 숭실대학교 학생들을 대상으로 \n한 알고리즘 스터디입니다.",
    },
  });

  return (
    <GroupInfoForm form={form}>
      <button disabled={!form.formState.isValid}>제출하기</button>
    </GroupInfoForm>
  );
};

export default CreateGroupForm;
