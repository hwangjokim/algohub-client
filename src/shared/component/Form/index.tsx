import Calendar from "@/common/component/Calendar";
import Input from "@/common/component/Input";
import Textarea from "@/common/component/Textarea";
import type { getRevalidationOnServerHandlers } from "@/shared/util/form";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import {
  Controller,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  type UseFormReturn
} from "react-hook-form";
import FormDescription from "./FormDescription";
import FormLabel from "./FormLabel";
import { itemDefaultStyle, itemStyle } from "./index.css";

type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  type: "input" | "textarea" | "date";
  name: TName;
  labelPosition?: "top" | "bottom";
  descriptionPosition?: "top" | "bottom";
  showLabel?: boolean;
  showDescription?: boolean;
  revalidationHandlers?: typeof getRevalidationOnServerHandlers;
  form: UseFormReturn<TFieldValues>;
  labelProps?: ComponentProps<typeof FormLabel>;
  inputProps?: ComponentProps<typeof Input>;
  textareaProps?: ComponentProps<typeof Textarea>;
  dateProps?: ComponentProps<typeof Calendar>;
  descriptionProps?: ComponentProps<typeof FormDescription>;
};

const FormController = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  type,
  name,
  labelPosition = "top",
  descriptionPosition = "bottom",
  showLabel = false,
  showDescription = false,
  revalidationHandlers,
  form,
  labelProps,
  inputProps,
  textareaProps,
  dateProps,
  descriptionProps,
}: FormFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { error } }) => {
        const { name } = field;
        const fieldId = `form-${name}`;
        const formDescriptionId = `${name}-description`;
        const isError = !!error;
        const message = error?.message;
        const props = {
          id: fieldId,
          isError,
          "aria-describedby": formDescriptionId,
          "aria-invalid": isError,
          ...field,
          ...revalidationHandlers?.(
            form as UseFormReturn,
            field as ControllerRenderProps,
          ),
        };
        const Description = (
          <FormDescription
            id={formDescriptionId}
            message={message}
            isError={isError}
            {...descriptionProps}
          />
        );
        let FormField: ReactNode;
        if (type === "input") {
          FormField = <Input size="large" {...props} {...inputProps} />;
        } else if (type === "textarea") {
          FormField = <Textarea {...props} {...textareaProps} />;
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
            {showDescription && descriptionPosition === "top" && Description}

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

            {showDescription && descriptionPosition === "bottom" && Description}
          </div>
        );
      }}
    />
  );
};

const Form = FormProvider;

export { Form, FormController };
