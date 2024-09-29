import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { FormFieldContext, FormItemContext } from "../component/Form";

const useFormField = () => {
  /**
   * 현재 form field의 상태와 정보에 접근할 수 있게 해주는 훅
   * form 구성은 Field-Item-Control으로 이어지는 트리구조
   * Control에서 이 훅을 사용해 form의 상태와 유효성 검사 결과를 확인
   */
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

export default useFormField;
