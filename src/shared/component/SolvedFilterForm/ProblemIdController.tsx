import type { solvedFilterSchema } from "@/api/group/schema";
import { FormController } from "@/shared/component/Form";
import { filterTextStyle } from "@/shared/component/SolvedFilterForm/index.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

const ProblemIdController = ({
  form,
}: { form: UseFormReturn<z.infer<typeof solvedFilterSchema>> }) => {
  return (
    <FormController
      form={form}
      name="problemId"
      type="input"
      fieldProps={{
        placeholder: "문제 번호",
        className: filterTextStyle,
      }}
    />
  );
};

export default ProblemIdController;
