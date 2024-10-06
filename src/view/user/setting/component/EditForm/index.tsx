"use client";

import img_userprofile from "@/asset/img/alogohub_icon.png";
import Button from "@/common/component/Button";
import EditAvatar from "@/shared/component/EditAvatar";
import { Form, FormController } from "@/shared/component/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { editSchema } from "../../api/schema";
import Card from "../Card";
import { textStyle } from "../MyProfile/index.css";
import { contentStyle, formStyle, labelStyle } from "./index.css";

const EditForm = () => {
  // TODO: API연결 후 defaultValues 적용하기
  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    mode: "onTouched",
    defaultValues: {
      nickname: "",
      baekjoonId: "",
      introduction: "",
    },
  });
  const [img, setImg] = useState("");

  const onSubmit = (_values: z.infer<typeof editSchema>) => {
    // console.log({ values });
  };
  return (
    <>
      <EditAvatar
        src={img_userprofile}
        alt="프로필 이미지"
        onImageChange={setImg}
      />
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
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
                inputProps={{
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
                inputProps={{
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
                inputProps={{
                  placeholder: "프로필에 나타나요",
                }}
              />
            </div>
            <Button size="large">수정하기</Button>
          </form>
        </Form>
        <p className={textStyle.footer}>회원 탈퇴하기</p>
      </Card>
    </>
  );
};

export default EditForm;
