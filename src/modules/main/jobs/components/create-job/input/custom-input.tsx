import { icons } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type IconName = keyof typeof icons;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: IconName;
  error?: string;
}

const CustomInput = ({
  placeholder,
  icon,
  error,
  className,
  ...inputProps
}: Props) => {
  const IconComponent = icons[icon];

  return (
    <div>
      <div
        className={`flex items-center h-16 w-full overflow-hidden rounded-full px-5 gap-2 border border-muted focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-muted/50 transition ${className ?? ""}`}
      >
        {icon && <IconComponent className="stroke-[1.5px] h-4.5 w-4.5" />}

        <input
          {...inputProps}
          placeholder={placeholder}
          className="flex-1 h-full bg-transparent outline-none text-sm"
        />
      </div>

      {error && <p className="text-xs ml-4 text-destructive mt-2">{error}</p>}
    </div>
  );
};

export default CustomInput;
