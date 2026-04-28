import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface Props {
  placeholder: string;
  icon: IconName;
  onChange?: (val: string) => void;
  type: "number" | "text" | "email" | "password" | "search";
  id?: string;
  value?: string | number;
  className?: string;
  required?: false
}

const CustomInput = ({
  placeholder,
  icon,
  onChange,
  type,
  id,
  value,
  className, required
}: Props) => {
  const IconComponent = icons[icon];

  return (
    <div
      className={`flex items-center h-14 w-full border overflow-hidden rounded-full px-3 gap-2 focus-within:ring-2 focus-within:ring-muted transition ${className}`}
    >
      {icon && <IconComponent className="stroke-[1px]" />}
      <input
        placeholder={placeholder}
        className="flex-1 h-full bg-transparent outline-none text-sm"
        type={type}
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
