import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import React from "react";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string,
  label?: string,
  placeholder?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?: boolean,
  dateFormat?: string,
  showTimwSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: any) => React.ReactNode
}

const RenderInput = ({field, props}: {field:any, props: CustomProps}) => {
    return(
        <Input
            type="text"
            placeholder="John doe"
        />
    )
}

export const CustomFormField = (props: CustomProps) => {

    const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType == FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderInput field={field} props={props} />

        </FormItem>
      )}
    />
  );
};
