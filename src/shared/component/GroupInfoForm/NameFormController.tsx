import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  formLabelStyle,
  nameFormInputStyle,
} from "@/shared/component/GroupInfoForm/index.css";

const NameFormController = ({ form, variant }: GroupFormProps) => {
  return (
    <FormController
      form={form}
      name="name"
      type="input"
      showLabel
      labelPosition="top"
      labelProps={{
        children: "스터디 이름",
        className: formLabelStyle({ variant }),
      }}
      inputProps={{
        placeholder: form.getValues("name"),
        className: nameFormInputStyle({ variant }),
      }}
    />
  );
};

export default NameFormController;
