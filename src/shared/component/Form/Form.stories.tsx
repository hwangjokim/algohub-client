import Button from "@/common/component/Button";
import { useCheckOnServer } from "@/shared/hook/useCheckOnServer";
import {
  getMultipleRevalidationHandlers,
  getRevalidationOnServerHandlers
} from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormController } from ".";
import { storyContentStyle, storyFormStyle, storyItemStyle } from "./index.css";

const meta: Meta<typeof Form> = {
  title: "Shared/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  render: () => {
    const loginSchema = z.object({
      id: z
        .string()
        .min(6)
        .max(12)
        .regex(/^[a-zA-Z0-9]+$/),

      password: z
        .string()
        .min(8)
        .max(15)
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),
    }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      mode: "onTouched",
      defaultValues: {
        id: "",
        password: "",
      },
    });

    const isError = !!Object.keys(form.formState.errors).length;
    const message = isError ? "아이디 혹은 비밀번호를 확인해주세요" : undefined;
    const onSubmit = (_values: z.infer<typeof loginSchema>) => {
      // console.log({ values });
    };
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "login" })}
        >
          <div className={storyContentStyle.loginContents}>
            <div className={storyContentStyle.fields}>
              <FormController
                control={form.control}
                type="input"
                name="id"
                showDescription
                descriptionPosition="top"
                descriptionProps={{ isError, message }}
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "아이디",
                }}
              />
              <FormController
                control={form.control}
                type="input"
                name="password"
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "비밀번호",
                  "aria-describedby": "id-description",
                }}
              />
            </div>
            <Button type="submit" size="medium">
              로그인
            </Button>
          </div>
          <p className={storyItemStyle.text}>
            아직 계정이 없으신가요? 회원가입하기
          </p>
        </form>
      </Form>
    );
  },
};

export const PasswordConfirm: Story = {
  render: () => {
    const passwordSchema = z
      .object({
        password: z
          .string()
          .min(8)
          .max(15)
          .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/,
          ),

        confirmPassword: z.string(),
      })
      .superRefine(async (data, ctx) => {
        // password 일치 여부
        if (data.password !== data.confirmPassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
            path: ["confirmPassword"],
          });
        }
      }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof passwordSchema>>({
      resolver: zodResolver(passwordSchema),
      mode: "onTouched",
      defaultValues: {
        password: "",
        confirmPassword: "",
      },
    });

    const { errors } = form.formState;

    const isError =
      !!errors.password || errors.confirmPassword?.type === "custom";
    const message =
      errors.confirmPassword?.message ||
      "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리";

    const onSubmit = (_values: z.infer<typeof passwordSchema>) => {
      // console.log({ values });
    };
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "login" })}
        >
          <div className={storyContentStyle.loginContents}>
            <div className={storyContentStyle.fields}>
              <FormController
                control={form.control}
                type="input"
                name="password"
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "비밀번호",
                  "aria-describedby": "password-description",
                }}
              />
              <FormController
                control={form.control}
                type="input"
                name="confirmPassword"
                // 비밀번호 field도 같이 검사하여 둘이 같이 onTouched 한 것 처럼 작동
                // 확인하려면 revalidationHandlers 주석 처리 후 confirmPassword를 바로 blur 해보세요
                revalidationHandlers={getMultipleRevalidationHandlers(
                  "password",
                )}
                showDescription
                descriptionProps={{ isError, message }}
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "비밀번호 확인",
                }}
              />
            </div>
            <Button type="submit" size="medium">
              비밀번호 체크
            </Button>
          </div>
        </form>
      </Form>
    );
  },
};

export const ValidateOnServer: Story = {
  render: () => {
    const serverValidationSchema = z.object({
      nickname: z
        .string()
        .min(0)
        .max(16, { message: "닉네임을 확인해주세요" })
        .regex(/^[a-zA-Z0-9]+$/, "닉네임을 확인해주세요"),

      baekjoonId: z
        .string()
        .min(4, { message: "백준 아이디를 확인해주세요" })
        .max(20, { message: "백준 아이디를 확인해주세요" })
        .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),

      introduction: z.string().min(2).max(20),
    });
    // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof serverValidationSchema>>({
      resolver: zodResolver(serverValidationSchema),
      mode: "onTouched",
      defaultValues: {
        nickname: "",
        baekjoonId: "",
        introduction: "",
      },
    });

    const nickname = form.watch("nickname");
    const backjoonId = form.watch("baekjoonId");
    // useQuery 모방용 임시 훅
    const { isNicknameLoading, isBaekjoonIdLoading } = useCheckOnServer(
      form,
      nickname,
      backjoonId,
      serverValidationSchema,
    );
    const { errors, dirtyFields } = form.formState;

    // 기본적으로 메세지 표시x
    // 서버 검증 시 로딩중 표시
    // 검증 완료 시 메시지 표시
    // 에러 발생 시 에러 & 에러 메세지 표시
    const nicknameValidationSuccess =
      !(errors.nickname || isNicknameLoading) && dirtyFields.nickname;
    const nicknameMsg = isNicknameLoading
      ? "로딩중"
      : nicknameValidationSuccess
        ? "사용가능한 닉네임이에요."
        : errors.nickname?.message;

    // 기본적으로 메세지 표시x
    // 서버 검증 시 로딩중 표시
    // 검증 완료 시 메시지 표시
    // 에러 발생 시 에러 & 에러 메세지 표시
    const baekjoonIdValidationSuccess =
      !(errors.baekjoonId || isBaekjoonIdLoading) && dirtyFields.baekjoonId;
    const bjMsg = isBaekjoonIdLoading
      ? "로딩중"
      : baekjoonIdValidationSuccess
        ? "정상적으로 연동되었어요."
        : errors.baekjoonId?.message;

    const onSubmit = (_values: z.infer<typeof serverValidationSchema>) => {
      // console.log({ values });
    };
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "edit" })}
        >
          <div className={storyContentStyle.editContents}>
            <div className={storyContentStyle.fields}>
              <p style={{ color: "white" }}>
                스토리용 임시 검증 : t로 끝나면 통과, 그 외 중복 표시
              </p>
              <FormController
                control={form.control}
                name="nickname"
                type="input"
                showLabel
                showDescription
                // 이 필드만 onChange로 검사하기 위해 custom handler 적용
                revalidationHandlers={getRevalidationOnServerHandlers}
                labelProps={{
                  className: storyItemStyle.label,
                  children: "닉네임(서버에서 검증)",
                }}
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "닉네임",
                }}
                descriptionProps={{
                  showErrorIcon: false,
                  message: nicknameMsg,
                }}
              />
              <FormController
                control={form.control}
                name="baekjoonId"
                type="input"
                showLabel
                showDescription
                // 이 필드만 onChange로 검사하기 위해 custom handler 적용
                revalidationHandlers={getRevalidationOnServerHandlers}
                labelProps={{
                  className: storyItemStyle.label,
                  children: "백준 아이디(서버에서 검증)",
                }}
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "백준 아이디",
                }}
                descriptionProps={{
                  showErrorIcon: false,
                  message: bjMsg,
                }}
              />
              <FormController
                control={form.control}
                name="introduction"
                type="input"
                showLabel
                showDescription
                labelProps={{
                  className: storyItemStyle.label,
                  children: "소개(서버 x)",
                }}
                inputProps={{
                  className: storyItemStyle.input,
                  placeholder: "소개",
                }}
              />
            </div>
            <Button type="submit" size="medium">
              회원가입하기
            </Button>
          </div>
          <p className={storyItemStyle.text}>회원 탈퇴하기</p>
        </form>
      </Form>
    );
  },
};

export const DateTypeWithErrorMsg: Story = {
  render: () => {
    const postSchema = z.object({
      title: z
        .string()
        .min(6)
        .max(12)
        .regex(/^[a-zA-Z가-하0-9]+$/),

      date: z
        .date()
        .refine(
          (value) => !Number.isNaN(Date.parse(value.toString())),
          "유효한 날짜를 입력해주세요",
        ),
    }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof postSchema>>({
      resolver: zodResolver(postSchema),
      mode: "onTouched",
      defaultValues: {
        title: "",
        date: new Date(),
      },
    });

    const onSubmit = (values: z.infer<typeof postSchema>) => {
      // console.log({ values });
      alert(`${values.date.toLocaleDateString()}, ${values.title}`);
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "login" })}
        >
          <div className={storyContentStyle.loginContents}>
            <FormController
              control={form.control}
              type="input"
              name="title"
              showDescription
              inputProps={{
                placeholder: "제목",
              }}
            />

            <FormController
              control={form.control}
              type="date"
              name="date"
              showDescription
            />
          </div>
          <Button type="submit" size="medium">
            등록
          </Button>
        </form>
      </Form>
    );
  },
};
