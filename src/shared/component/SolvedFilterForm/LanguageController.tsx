import type { solvedFilterSchema } from "@/api/group/schema";
import { FormController } from "@/shared/component/Form";
import { filterTextStyle } from "@/shared/component/SolvedFilterForm/index.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

const LanguageController = ({
  form,
}: { form: UseFormReturn<z.infer<typeof solvedFilterSchema>> }) => {
  return (
    <FormController
      form={form}
      name="language"
      type="input"
      fieldProps={{
        placeholder: "모든 언어",
        className: filterTextStyle,
      }}
    />
  );
};

export default LanguageController;
