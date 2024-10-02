import Button from "@/common/component/Button";
import Calendar from "@/common/component/Calendar";
import Input from "@/common/component/Input";
import { getRevalidationHandlers } from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormControl, FormDescription, FormField, FormLabel } from ".";
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
                revalidationHandlers={revalidationHandlers}
              >
                <FormDescription
                  className={storyItemStyle.description}
                  isError={isError}
                  message={message}
                />
                <FormControl>
                  <Input
                    size="large"
                    className={storyItemStyle.input}
                    placeholder="아이디"
                  />
                </FormControl>
              </FormField>
              
              <FormField
                control={form.control}
                name="password"
                revalidationHandlers={revalidationHandlers}
              >
                <FormControl>
                  <Input
                    size="large"
                    className={storyItemStyle.input}
                    placeholder="비밀번호"
                  />
                </FormControl>
              </FormField>
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
                revalidationHandlers={revalidationHandlers}
              >
                <FormLabel className={storyItemStyle.label}>닉네임</FormLabel>
                <FormControl>
                  <Input
                    className={storyItemStyle.input}
                    size="large"
                    placeholder="닉네임"
                  />
                </FormControl>
              </FormField>

              <FormField
                control={form.control}
                name="baekjoonId"
                revalidationHandlers={revalidationHandlers}
              >
                <FormLabel className={storyItemStyle.label}>
                  백준 아이디
                </FormLabel>
                <FormControl>
                  <Input
                    className={storyItemStyle.input}
                    size="large"
                    placeholder="백준 아이디"
                  />
                </FormControl>
              </FormField>

              <FormField
                control={form.control}
                name="introduction"
                revalidationHandlers={revalidationHandlers}
              >
                <FormLabel className={storyItemStyle.label}>소개</FormLabel>
                <FormControl>
                  <Input
                    className={storyItemStyle.input}
                    size="large"
                    placeholder="소개"
                  />
                </FormControl>
              </FormField>
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
      defaultValues: {
        title: "",
        date: new Date(),
      },
    });
    const dateValue = form
      .getValues("date")
      .toLocaleDateString()
      .replaceAll(" ", "");
    const revalidationHandlers = getRevalidationHandlers(form);

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
            <FormField
              control={form.control}
              name="title"
              revalidationHandlers={revalidationHandlers}
            >
              <FormControl>
                <Input size="large" placeholder="제목" />
              </FormControl>
              <FormDescription />
            </FormField>

            <FormField
              control={form.control}
              name="date"
              revalidationHandlers={revalidationHandlers}
            >
              <FormControl>
                <Calendar value={dateValue} />
              </FormControl>
              <FormDescription />
            </FormField>
          </div>
          <Button type="submit" size="medium">
            등록
          </Button>
        </form>
      </Form>
    );
  },
};
