import type { ChangeEvent } from "react";
import {
  type DeepMap,
  type FieldValues,
  type Path,
  useController,
  useFormContext,
} from "react-hook-form";

const shouldValidateOnChange = <
  TFieldValues extends FieldValues,
  TFieldName extends keyof DeepMap<TFieldValues, boolean>,
>(
  fieldName: TFieldName,
  touchedFields: DeepMap<TFieldValues, boolean>,
  dirtyFields: DeepMap<TFieldValues, boolean>,
) => {
  return touchedFields[fieldName] && dirtyFields[fieldName];
};

/**
 * 비밀번호 확인처럼 여러 필드의 유효성 검사를 한번에 하는 handlers를 반환하는 함수
 * @param otherFieldNames 자신을 제외하고 같이 검사할 필드들의 name
 */
export const getMultipleRevalidationHandlers =
  <TFieldValues extends FieldValues, TFieldName extends Path<TFieldValues>>(
    ...otherFieldNames: TFieldName[]
  ) =>
  (fieldName: string) => {
    const form = useFormContext();
    const { field } = useController({
      name: fieldName,
      control: form.control,
    });
    const { touchedFields, dirtyFields } = form.formState;
    const { trigger } = form;
    const fieldNames = [fieldName, ...otherFieldNames];
    return {
      onBlur: () => {
        field.onBlur();
        for (const fieldName of fieldNames) {
          trigger(fieldName);
        }
      },
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        field.onChange(e);
        if (
          fieldNames.every((fieldName) =>
            shouldValidateOnChange(fieldName, touchedFields, dirtyFields),
          )
        ) {
          for (const fieldName of fieldNames) {
            trigger(fieldName);
          }
        }
      },
    };
  };

/**
 * 매 입력마다 서버에서 결과를 받아야 하는 필드에 대해 * onChange로 유효성 검사하게 만드는 handler를 반환하는 함수
 */
export const getRevalidationOnServerHandlers = (fieldName: string) => {
  const form = useFormContext();
  const { field } = useController({
    name: fieldName,
    control: form.control,
  });
  const {
    trigger,
    formState: { errors },
  } = form;

  return {
    onBlur: () => {
      if (errors[fieldName]?.type === "custom") return;
      field.onBlur();
      trigger(fieldName);
    },
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      field.onChange(e);
      trigger(fieldName);
    },
  };
};
