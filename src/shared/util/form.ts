import type { ChangeEvent } from "react";
import type {
  ControllerRenderProps,
  DeepMap,
  FieldValues,
  Path,
  UseFormReturn
} from "react-hook-form";

const shouldValidateOnChange = <
  TFieldValues extends FieldValues,
  TFieldName extends keyof DeepMap<TFieldValues, boolean>,
>(
  fieldName: TFieldName,
  touchedFields: DeepMap<TFieldValues, boolean>, // DeepMap으로 변경
  dirtyFields: DeepMap<TFieldValues, boolean>,   // DeepMap으로 변경
) => {
  return touchedFields[fieldName] && dirtyFields[fieldName];
};

/**
 * 첫 blur 이후, onChange로 유효성 검사하게 만드는 handler를 반환하는 함수
 * @param form react-hook-form의 useForm 리턴 객체
 * @example
 * const form = useForm<z.infer<typeof loginSchema>>({
 *   resolver: zodResolver(loginSchema),
 *   mode: "onBlur",
 *   defaultValues: {
 *     id: "",
 *     password: "",
 *   },
 * });
 *
 * const revalidationHandlers = getRevalidationHandlers(form);
 *
 * <FormField
 *   control={form.control}
 *   name="password"
 *   render={({ field }) => (
 *     <FormItem>
 *       <FormControl>
 *         <Input
 *           {...field}
 *           placeholder="비밀번호"
 *           size="large"
 *           {...revalidationHandlers("password", field)}
 *         />
 *       </FormControl>
 *     </FormItem>
 *   )}
 * />
 */
export const getRevalidationHandlers =
  <TFieldValues extends FieldValues, TFieldName extends Path<TFieldValues>>(
    form: UseFormReturn<TFieldValues>, // useForm의 반환 타입으로 인자 설정
  ) =>
  (
    fieldName: TFieldName,
    field: ControllerRenderProps<TFieldValues, TFieldName>,
  ) => {
    const { touchedFields, dirtyFields } = form.formState;
    const { trigger } = form;

    return {
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
    };
  };
