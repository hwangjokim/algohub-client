import type { ChangeEvent } from "react";
import type {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormTrigger,
} from "react-hook-form";

const shouldValidateOnChange = <
  TFieldValues extends FieldValues,
  TFieldName extends Path<TFieldValues>,
>(
  fieldName: TFieldName,
  touchedFields: Partial<Record<TFieldName, boolean>>,
  dirtyFields: Partial<Record<TFieldName, boolean>>,
) => {
  return touchedFields[fieldName] && dirtyFields[fieldName];
};

/**
 * 첫 blur 이후, onChange로 유효성 검사하게 만드는 handler를 반환하는 함수
 * @param touchedFields onBlur가 발생했던 fields
 * @param dirtyFields onChange가 발생했던 fields
 * @param trigger 유효성 검사 실행 함수
 * @example
 * const { touchedFields, dirtyFields, isValid, errors } = form.formState;
  const { trigger } = form;

  const revalidationHandlers = getRevalidationHandlers(touchedFields, dirtyFields, trigger);

  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input
            {...field}
            placeholder="비밀번호"
            size="large"
            {...revalidationHandlers("password", field)}
          />
        </FormControl>
      </FormItem>
    )}
  />
 */
export const getRevalidationHandlers =
  <TFieldValues extends FieldValues, TFieldName extends Path<TFieldValues>>(
    touchedFields: Partial<Record<TFieldName, boolean>>,
    dirtyFields: Partial<Record<TFieldName, boolean>>,
    trigger: UseFormTrigger<TFieldValues>,
  ) =>
  (
    fieldName: TFieldName,
    field: ControllerRenderProps<TFieldValues, TFieldName>,
  ) => ({
    onBlur: () => {
      field.onBlur();
      trigger(fieldName);
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      field.onChange(e);
      if (shouldValidateOnChange(fieldName, touchedFields, dirtyFields)) {
        trigger(fieldName);
      }
    },
  });
