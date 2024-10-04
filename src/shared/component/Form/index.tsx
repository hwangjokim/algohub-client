import Calendar from "@/common/component/Calendar";
import type { InputProps } from "@/common/component/Input";
import Input from "@/common/component/Input";
import SupportingText, {
  type SupportingTextProps,
} from "@/common/component/SupportingText";
import type { TextareaProps } from "@/common/component/Textarea";
import Textarea from "@/common/component/Textarea";
import type { getRevalidationOnServerHandlers } from "@/shared/util/form";
import clsx from "clsx";
import { type ComponentProps, type ReactNode, forwardRef } from "react";
import {
  type Control,
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
} from "react-hook-form";
import { errorLabelStyle, itemDefaultStyle, itemStyle } from "./index.css";

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
  type: "input" | "textarea" | "date";
  name: TName;
  labelPosition?: "top" | "bottom";
  descriptionPosition?: "top" | "bottom";
  showLabel?: boolean;
  showDescription?: boolean;
  revalidationHandlers?: typeof getRevalidationOnServerHandlers;
  control: Control<TFieldValues>;
  labelProps?: ComponentProps<typeof FormLabel>;
  inputProps?: InputProps;
  textareaProps?: TextareaProps;
  dateProps?: ComponentProps<typeof Calendar>;
  descriptionProps?: FormDescriptionProps;
};

const FormController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  type,
  name,
  labelPosition = "top",
  descriptionPosition = "bottom",
  showLabel = false,
  showDescription = false,
  revalidationHandlers,
  control,
  labelProps,
  inputProps,
  textareaProps,
  dateProps,
  descriptionProps,
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { name } = field;
        const fieldId = `form-${name}`;
        const formDescriptionId = `${name}-description`;
        const isError = !!error;
        const message = error?.message;
        let FormField: ReactNode;
        if (type === "input") {
          FormField = (
            <Input
              id={fieldId}
              size="large"
              isError={isError}
              aria-describedby={formDescriptionId}
              aria-invalid={isError}
              {...field}
              {...revalidationHandlers?.(name)}
              {...inputProps}
            />
          );
        } else if (type === "textarea") {
          FormField = (
            <Textarea
              id={fieldId}
              isError={isError}
              aria-describedby={formDescriptionId}
              aria-invalid={isError}
              {...field}
              {...revalidationHandlers?.(name)}
              {...textareaProps}
            />
          );
        } else {
          FormField = (
            <Calendar
              id={fieldId}
              {...dateProps}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          );
        }
        return (
          <div className={clsx(itemDefaultStyle)}>
            {showDescription && descriptionPosition === "top" && (
              <FormDescription
                id={formDescriptionId}
                message={message}
                isError={isError}
                {...descriptionProps}
              />
            )}

            {showLabel && labelPosition === "top" && (
              <FormLabel
                htmlFor={fieldId}
                isError={isError}
                {...labelProps}
                className={clsx(
                  labelProps?.className,
                  type === "date" && itemStyle.dateLabel,
                )}
              />
            )}

            {FormField}

            {showLabel && labelPosition === "bottom" && (
              <FormLabel htmlFor={fieldId} isError={isError} {...labelProps} />
            )}

            {showDescription && descriptionPosition === "bottom" && (
              <FormDescription
                id={formDescriptionId}
                message={message}
                isError={isError}
                {...descriptionProps}
              />
            )}
          </div>
        );
      }}
    />
  );
};

/** Label 컴포넌트 */
const FormLabel = forwardRef<
  HTMLLabelElement,
  ComponentProps<"label"> & { isError?: boolean }
>(({ className, isError, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={clsx(className, isError && errorLabelStyle)}
      {...props}
    />
  );
});
FormLabel.displayName = "Label";

type FormDescriptionProps = {
  showError?: boolean;
  showErrorIcon?: boolean;
} & SupportingTextProps;

/** FormDescription 컴포넌트 */
const FormDescription = ({
  message,
  isError,
  showError = true,
  showErrorIcon = true,
  ...props
}: FormDescriptionProps) => {
  if (!message) return null;

  return (
    <SupportingText
      isError={showError && isError}
      hasErrorIcon={showErrorIcon && isError}
      message={message}
      {...props}
    />
  );
};
FormDescription.displayName = "FormDescription";

const Form = FormProvider;

export { Form, FormController };
