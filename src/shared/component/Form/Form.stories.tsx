import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import useFormField from "@/shared/hook/useFormField";
import { getRevalidationHandlers } from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from ".";
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
      mode: "onBlur",
      defaultValues: {
        id: "",
        password: "",
      },
    });

    const isError = !!Object.keys(form.formState.errors).length;
    const message = isError ? "아이디 혹은 비밀번호를 확인해주세요" : undefined;

    const revalidationHandlers = getRevalidationHandlers(form);

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
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription
                      className={storyItemStyle.description}
                      isError={isError}
                      message={message}
                    />
                    <FormControl>
                      <Input
                        {...field}
                        size="large"
                        className={storyItemStyle.input}
                        placeholder="아이디"
                        {...revalidationHandlers("id", field)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        size="large"
                        className={storyItemStyle.input}
                        placeholder="비밀번호"
                        {...revalidationHandlers("password", field)}
                      />
                    </FormControl>
                  </FormItem>
                )}
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

export const LabelWithError: Story = {
  render: () => {
    const editSchema = z.object({
      nickname: z
        .string()
        .max(16)
        .regex(/^[a-zA-Z0-9]+$/),

      baekjoonId: z
        .string()
        .min(4)
        .max(20)
        .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),

      introduction: z.string().min(2).max(20),
    });
    // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof editSchema>>({
      resolver: zodResolver(editSchema),
      mode: "onBlur",
      defaultValues: {
        nickname: "",
        baekjoonId: "",
        introduction: "",
      },
    });

    const revalidationHandlers = getRevalidationHandlers(form);

    const onSubmit = (_values: z.infer<typeof editSchema>) => {
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
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={storyItemStyle.label}>
                      닉네임
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={storyItemStyle.input}
                        size="large"
                        placeholder="닉네임"
                        {...revalidationHandlers("nickname", field)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baekjoonId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={storyItemStyle.label}>
                      백준 아이디
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={storyItemStyle.input}
                        size="large"
                        placeholder="백준 아이디"
                        {...revalidationHandlers("baekjoonId", field)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="introduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={storyItemStyle.label}>소개</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className={storyItemStyle.input}
                        size="large"
                        placeholder="소개"
                        {...revalidationHandlers("introduction", field)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" size="medium">
              수정하기
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
        .regex(/^[a-zA-Z0-9]+$/),

      date: z
        .string()
        .refine(
          (value) => !Number.isNaN(Date.parse(value)),
          "유효한 날짜를 입력해주세요",
        ),
    }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof postSchema>>({
      resolver: zodResolver(postSchema),
      defaultValues: {
        title: "",
        date: "",
      },
    });

    const revalidationHandlers = getRevalidationHandlers(form);

    const ErrorMsg = () => {
      // useFormField()는 context를 사용하는 훅이므로
      // 이 ErrorMsg 컴포넌트가 속한 FormFieldContext 및 FormItemContext의 정보를 가져옴
      const { error } = useFormField();
      if (!error) return null;
      return <p style={{ color: "red" }}>{error.message}</p>;
    };

    const onSubmit = (_values: z.infer<typeof postSchema>) => {
      // console.log({ values });
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={storyFormStyle({type: "login"})}>
          <div className={storyContentStyle.loginContents}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      size="large"
                      placeholder="제목"
                      {...revalidationHandlers("title", field)}
                    />
                  </FormControl>
                  <ErrorMsg />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      type="date"
                      placeholder="날짜"
                      {...revalidationHandlers("date", field)}
                    />
                  </FormControl>
                  <ErrorMsg />
                </FormItem>
              )}
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
