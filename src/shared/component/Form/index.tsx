"use client";

import { joinClassName } from "@/common/util/string";
import { Slot } from "@radix-ui/react-slot";
import {
  type HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useId,
} from "react";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { itemDefaultStyle, labelDefaultStyle } from "./index.css";

/** form 내부 요소의 모든 상태를 관리하는 context */
const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

/** <FormField> name 속성 관리용 context
 * 이 context를 통해 form을 사용할 컴포넌트에서 특정 name을 가진 field 상태에 접근할 수 있음
 */
const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/** 개별 form field의 컨트롤러 역할
 * field의 상태, 유효성 검사 로직 처리
 * 필드 name(ex: id, password)을 context.provider로 제공
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/**
 * 현재 form field의 상태와 정보에 접근할 수 있게 해주는 훅
 * form 구성은 Field-Item-Control-children으로 이어지는 트리구조
 * Control에서 이 훅을 사용해 form의 상태와 유효성 검사 결과를 확인
 */
const useFormField = () => {
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

type FormItemContextValue = {
  id: string;
};

/** <FormItem />의 접근성 속성에 사용될 고유 ID를 부여하는 context
 * 접근성 속성에 사용되는 id값을 자동으로 할당하는 데 사용됨
 */
const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/** 고유 id값을 생성하여 form의 각 item을 구별하는데 사용
 * <FormControl />에서 useFormField 훅 사용 시 이 고유 id값을 불러올 수 있음
 */
const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div
          ref={ref}
          className={joinClassName(className, itemDefaultStyle)}
          {...props}
        />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = forwardRef<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <label
      ref={ref}
      className={joinClassName(
        className,
        labelDefaultStyle[error ? "error" : "default"],
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

/** 실제 form field(input, checkbox 등)을 감싸는 컨트롤러
 * 부모 context provider에서 생성한 정보들로 구성된
 * 여러 접근성 속성값 및 유효성 검사 결과를 useFormField 훅으로 가져와 적용
 */
const FormControl = forwardRef<HTMLDivElement, HTMLAttributes<HTMLInputElement> & { isError?: boolean }>( // TODO: input 컴포넌트 props로 교체하기
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();
    const isError = !!error;
    return (
      <Slot
        ref={ref}
        id={formItemId}
        isError={isError}
        aria-describedby={
          error
            ? `${formDescriptionId} ${formMessageId}`
            : `${formDescriptionId}`
        }
        aria-invalid={isError}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

export { Form, FormControl, FormField, FormItem, FormLabel, useFormField };

