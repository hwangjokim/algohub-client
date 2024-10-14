"use client";

import { useToast } from "@/common/hook/useToast";
import { Form, FormController } from "@/shared/component/Form";
import Card from "@/view/index/component/Card";
import SubmitButton from "@/view/index/component/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { baseEditSchema } from "../../api/schema";
import { editCardStyle, textStyle } from "../MyProfile/index.css";
import { contentStyle, formStyle, labelStyle } from "./index.css";

const EditForm = () => {
  // TODO: API연결 후 defaultValues 적용하기
  const form = useForm<z.infer<typeof baseEditSchema>>({
    resolver: zodResolver(baseEditSchema),
    mode: "onTouched",
    defaultValues: {
      profile: "",
      nickname: "백예린",
      baekjoonId: "yerin",
      introduction: "프로필에 나타나요",
    },
  });
  const { showToast } = useToast();
  // TODO: api 연결 후 default values와 달라지면 true가 되게 하기
  const isActive =
    !!Object.keys(form.formState.touchedFields).length &&
    form.formState.isValid;

  const handleSubmit = (_values: z.infer<typeof baseEditSchema>) => {
    showToast("정상적으로 수정이 되었어요", "success");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <FormController form={form} name="profile" type="image" />
        <Card className={editCardStyle}>
          <div className={contentStyle}>
            <FormController
              form={form}
              name="nickname"
              type="input"
              showLabel
              labelProps={{
                className: labelStyle,
                children: "닉네임",
              }}
              fieldProps={{
                placeholder: "닉네임",
              }}
            />

            <FormController
              form={form}
              name="baekjoonId"
              type="input"
              showLabel
              labelProps={{
                className: labelStyle,
                children: "백준 아이디",
              }}
              fieldProps={{
                placeholder: "백준 아이디",
              }}
            />

            <FormController
              form={form}
              name="introduction"
              type="input"
              showLabel
              labelProps={{
                className: labelStyle,
                children: "소개",
              }}
              fieldProps={{
                placeholder: "프로필에 나타나요",
              }}
            />
          </div>
          <SubmitButton isActive={isActive}>수정하기</SubmitButton>
          <p className={textStyle.footer}>회원 탈퇴하기</p>
        </Card>
      </form>
    </Form>
  );
};

export default EditForm;
