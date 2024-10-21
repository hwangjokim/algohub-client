"use client";
import { solvedFilterSchema } from "@/api/group/schema";
import { IcnReset } from "@/asset/svg";
import { Form } from "@/shared/component/Form";
import LanguageController from "@/shared/component/SolvedFilterForm/LanguageController";
import ProblemIdController from "@/shared/component/SolvedFilterForm/ProblemIdController";
import ResultController from "@/shared/component/SolvedFilterForm/ResultController";
import SolvedIdController from "@/shared/component/SolvedFilterForm/SolvedIdController";
import {
  dividerStyle,
  resetIconStyle,
  solvedFilterWrapper,
} from "@/shared/component/SolvedFilterForm/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const SolvedFilterForm = () => {
  const form = useForm<z.infer<typeof solvedFilterSchema>>({
    resolver: zodResolver(solvedFilterSchema),
    mode: "onSubmit",
    defaultValues: {
      problemId: "123",
      solvedId: "",
      language: "",
      result: "",
    },
  });

  const handleSubmit = (_values: z.infer<typeof solvedFilterSchema>) => {
    // console.log({values});
  };
  return (
    <Form {...form}>
      <form
        className={solvedFilterWrapper}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <ProblemIdController form={form} />
        <SolvedIdController form={form} />
        <LanguageController form={form} />
        <ResultController form={form} />
        <div className={dividerStyle} />
        <IcnReset
          role="button"
          type="submit"
          className={resetIconStyle}
          width={44}
          height={44}
          aria-label="풀이 리스트 필터링"
        />
      </form>
    </Form>
  );
};

export default SolvedFilterForm;
