import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { ReactNode } from "react";

interface Props {
  placeholder: string;
  icon?: ReactNode;
  onChange?: (val: string) => void;
  type: "number" | "text" | "email" | "password" | "search";
  id?: string;
  value?: string;
}

const CustomInput = ({
  placeholder,
  icon,
  onChange,
  type,
  id,
  value,
}: Props) => {
  return (
    <InputGroup className="h-12">
      <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>

      <InputGroupInput
        placeholder={placeholder}
        className="pl-1"
        type={type}
        id={id}
        value={value}
        required
        onChange={(e) => onChange?.(e.target.value)}
      />
    </InputGroup>
  );
};

export default CustomInput;
