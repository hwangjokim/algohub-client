import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  formLabelStyle
  nameFormInputStyletyletyletyletyletyletyletyletyletyle,
} from "@/shared/component/GroupInfoForm/index.css";

const ImageFormController = ({ form, variant }: GroupFormProps) => {
  return (
    <FormController
      form={form}
      name="image"
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

export default ImageFormController;
