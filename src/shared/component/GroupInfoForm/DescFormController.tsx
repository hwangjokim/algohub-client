import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  descInputStyle,
  formLabelStyle,
} from "@/shared/component/GroupInfoForm/index.css";

const DescFormController = ({ form, variant }: GroupFormProps) => {
  return (
    <FormController
      form={form}
      name="desc"
      type="textarea"
      showLabel
      labelPosition="top"
      labelProps={{
        children: "스터디 소개",
        className: formLabelStyle({ variant }),
      }}
      inputProps={{
        placeholder: form.getValues("desc"),
        className: descInputStyle,
      }}
    />
  );
};

export default DescFormController;
