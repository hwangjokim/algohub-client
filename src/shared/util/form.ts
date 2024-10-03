import type { ChangeEvent } from "react";
import {
  type DeepMap,
  type FieldValues,
  type Path,
  useController,
  useFormContext
} from "react-hook-form";
import { useFieldName } from "../hook/useFormField";

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
 ** `<FormField></FormField>`의 props로 넣어주세요.
 * @param otherFieldNames 자신을 제외하고 같이 검사할 필드들의 name
 * @example
  <FormField
    control={form.control}
    name="password"
    revalidationHandlers={getMultipleRevalidationHandlers("confirmPassword")}
  >
    <FormControl>...</FormControl>
  </FormField>

  <FormField
    control={form.control}
    name="confirmPassword"
    revalidationHandlers={getMultipleRevalidationHandlers("password")}
  >
    <FormControl>...</FormControl>
  </FormField>
 */
export const getMultipleRevalidationHandlers =
  <TFieldValues extends FieldValues, TFieldName extends Path<TFieldValues>>(
    ...otherFieldNames: TFieldName[]
  ) =>
  () => {
    const form = useFormContext();
    const fieldName = useFieldName<TFieldValues>();
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
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
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
 * 매 입력마다 서버에서 결과를 받아야 하는 필드에 대해 
 * onChange로 유효성 검사하게 만드는 handler를 반환하는 함수
 ** `<FormField></FormField>`의 props로 넣어주세요.
 */
export const getRevalidationOnServerHandlers = <
  TFieldValues extends FieldValues,
>() => {
  const form = useFormContext();
  const fieldName = useFieldName<TFieldValues>();
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
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e);
      trigger(fieldName);
    },
  };
};
