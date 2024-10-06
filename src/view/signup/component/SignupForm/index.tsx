"use client";

import defaultImg from "@/asset/img/img_userprofile.png";
import EditAvatar from "@/shared/component/EditAvatar";
import { Form, FormController } from "@/shared/component/Form";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import {
  getMultipleRevalidationHandlers,
  getRevalidationOnServerHandlers,
} from "@/shared/util/form";
import SubmitButton from "@/view/index/component/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { type baseSignupSchema, signupSchema } from "../../api/schema";
import {
  contentStyle,
  descriptionStyle,
  formContainer,
  formStyle,
} from "./index.css";

const SignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      id: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      baekjoonId: "",
    },
  });
  const [profile, setProfile] = useState("");
  const nickname = form.watch("nickname");
  const backjoonId = form.watch("baekjoonId");
  const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(
    form,
    nickname,
    backjoonId,
  );
  const { isValid, errors, dirtyFields } = form.formState;
  const disabled = !isValid;

  const idMsg = "영문 소문자 또는 영문 대문자, 숫자 조합 6~12 자리";

  const passwordError =
    !!errors.password || errors.confirmPassword?.type === "custom";
  const passwordMsg =
    errors.confirmPassword?.message ||
    "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리";

  const showNicknameMsg =
    !(errors.nickname || isNicknameLoading) && dirtyFields.nickname;
  const nicknameMsg = isNicknameLoading
    ? "로딩중"
    : showNicknameMsg
      ? "사용가능한 닉네임이에요."
      : errors.nickname?.message;

  const showBjMsg =
    !(errors.baekjoonId || isBaekjoonIdLoading) && dirtyFields.baekjoonId;
  const bjMsg = isBaekjoonIdLoading
    ? "로딩중"
    : showBjMsg
      ? "정상적으로 연동되었어요."
      : errors.baekjoonId?.message;

  const onSubmit = (_values: z.infer<typeof baseSignupSchema>) => {
    // console.log({ values, profile });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formStyle}>
        <div className={contentStyle}>
          <EditAvatar src={defaultImg} onImageChange={setProfile} />

          <div className={formContainer}>
            <FormController
              form={form}
              name="id"
              type="input"
              showDescription
              inputProps={{
                placeholder: "아이디",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: idMsg,
                className: descriptionStyle,
              }}
            />
          </div>

          <div className={formContainer}>
            <FormController
              form={form}
              name="password"
              type="input"
              inputProps={{
                placeholder: "비밀번호",
                "aria-describedby": "password-description",
              }}
            />
            <FormController
              form={form}
              name="confirmPassword"
              type="input"
              showDescription
              revalidationHandlers={getMultipleRevalidationHandlers("password")}
              inputProps={{
                placeholder: "비밀번호 확인",
                "aria-describedby": "password-description",
              }}
              descriptionProps={{
                showErrorIcon: false,
                id: "password-description",
                isError: passwordError,
                message: passwordMsg,
                className: descriptionStyle,
              }}
            />
          </div>

          <div className={formContainer}>
            <FormController
              form={form}
              name="nickname"
              type="input"
              showDescription
              revalidationHandlers={getRevalidationOnServerHandlers}
              inputProps={{
                placeholder: "닉네임",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: nicknameMsg,
                className: descriptionStyle,
              }}
            />
            <FormController
              form={form}
              name="baekjoonId"
              type="input"
              showDescription
              revalidationHandlers={getRevalidationOnServerHandlers}
              inputProps={{
                placeholder: "백준 아이디",
              }}
              descriptionProps={{
                showErrorIcon: false,
                message: bjMsg,
                className: descriptionStyle,
              }}
            />
          </div>
        </div>
        <SubmitButton disabled={disabled}>가입하기</SubmitButton>
      </form>
    </Form>
  );
};
export default SignupForm;
