import { Option } from "@/types/options";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type GenericInputProps = {
  name: string;
  label?: string;
  rules?: RegisterOptions;
};

type TextInputProps = GenericInputProps;

export const TextInput = ({ name, label, rules }: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Input
            type="text"
            placeholder={label}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
};

type SelectInputProps = GenericInputProps & {
  options: Option[];
};

export const SelectInput = ({
  name,
  label,
  rules,
  options,
}: SelectInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }}
    />
  );
};

type FileInputProps = Omit<GenericInputProps, "rules"> & {
  required?: boolean;
};

export const FileInput = ({ name, required, label }: FileInputProps) => {
  const { register, setValue } = useFormContext();
  const fileElement = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    setValue(name, file, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="cursor-pointer block mb-2 " htmlFor="file_input">
        {label ? label : "Upload file"}
      </Label>
      <Input
        className="block w-full text-sm text-black bg-white cursor-pointer focus:outline-none placeholder-white"
        id="file_input"
        type="file"
        accept="image/*"
        {...register(name, {
          required: required,
        })}
        onChange={handleOnChange}
        ref={fileElement}
      />
    </div>
  );
};
