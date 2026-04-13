import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getStatusColor } from "../../libs/utils";
import type { Status } from "../../types/job";

interface Props<T = string> {
  dropdownItems: T[];
  onSelect?: (value: T) => void;
  value?: string;
  placeholder: string;
  hasColor?: boolean;
}

const CreateDropdown = <T extends string>({
  dropdownItems,
  placeholder,
  hasColor = false,
  onSelect,
  value,
}: Props<T>) => {
  return (
    <Select onValueChange={(value) => onSelect?.(value as T)} value={value}>
      <SelectTrigger className="w-full rounded-full">
        <SelectValue placeholder={placeholder} className="" />
      </SelectTrigger>

      <SelectContent className="w-full">
        <SelectGroup>
          {dropdownItems.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="cursor-pointer flex items-center gap-2"
            >
              {hasColor &&
                (
                  ["applied", "interview", "offer", "rejected"] as Status[]
                ).includes(item as Status) && (
                  <span
                    className={`h-4 w-4 border rounded-full ${getStatusColor(item as Status)}`}
                  />
                )}
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CreateDropdown;
