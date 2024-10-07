import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  formLabelStyle,
  nameInputStyle,
} from "@/shared/component/GroupInfoForm/index.css";

const NameFormController = ({ form, variant }: GroupFormProps) => {
  const isError = !!form.formState.errors.name;
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
        placeholder: "스터디 이름을 입력해주세요. (최대 15자)",
        className: nameInputStyle({ variant }),
      }}
      showDescription
      descriptionPosition="bottom"
      descriptionProps={{
        isError,
        message: isError ? form.formState.errors.name?.message : undefined,
      }}
    />
  );
};

export default NameFormController;
