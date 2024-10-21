import type { solvedFilterSchema } from "@/api/group/schema";
import { FormController } from "@/shared/component/Form";
import { filterTextStyle } from "@/shared/component/SolvedFilterForm/index.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

const ResultController = ({
  form,
}: { form: UseFormReturn<z.infer<typeof solvedFilterSchema>> }) => {
  return (
    <FormController
      form={form}
      name="result"
      type="input"
      fieldProps={{
        placeholder: "모든 결과",
        className: filterTextStyle,
      }}
    />
  );
};

export default ResultController;
