import Button from "@/common/component/Button";
import { theme } from "@/styles/themes.css";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from ".";
import { storyContentStyle, storyFormStyle } from "./index.css";

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

export const Default: Story = {
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
      defaultValues: {
        id: "",
        password: "",
      },
    });

    const idError = form.getFieldState("id").invalid;
    const passwordError = form.getFieldState("password").invalid;
    const onSubmit = (_values: z.infer<typeof loginSchema>) => {
      // console.log({ values });
    };
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={storyFormStyle}>
          <div className={storyContentStyle}>
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} placeholder="아이디" />
                  </FormControl>
                  {idError && <p>id error</p>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} placeholder="비밀번호" />
                  </FormControl>
                  {passwordError && <p>password error</p>}
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="medium">
            로그인
          </Button>
        </form>
      </Form>
    );
  },
};

export const LabelWithError: Story = {
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
      defaultValues: {
        id: "",
        password: "",
      },
    });

    const idError = form.getFieldState("id").invalid;
    const passwordError = form.getFieldState("password").invalid;
    const onSubmit = (_values: z.infer<typeof loginSchema>) => {
      // console.log({ values });
    };
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={storyFormStyle}>
          <div className={storyContentStyle}>
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel isError={idError}>아이디</FormLabel>
                  <FormControl>
                    <input {...field} placeholder="아이디" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel isError={passwordError}>비밀번호</FormLabel>
                  <FormControl>
                    <input {...field} placeholder="비밀번호" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="medium">
            로그인
          </Button>
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

    const idError = form.getFieldState("title").invalid;
    const { invalid: dateError, error: dateErrorMsg } =
      form.getFieldState("date");

    const onSubmit = (_values: z.infer<typeof postSchema>) => {
      // console.log({ values });
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={storyFormStyle}>
          <div className={storyContentStyle}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} placeholder="아이디" />
                  </FormControl>
                  {idError && (
                    <p style={{ color: theme.color.red }}>id error</p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input {...field} type="date" placeholder="생년월일" />
                  </FormControl>
                  {dateError && (
                    <p style={{ color: theme.color.red }}>
                      {dateErrorMsg!.message}
                    </p>
                  )}
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
