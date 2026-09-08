import { Label } from "@/components/ui/label";

const FieldGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <Label className="text-sm font-medium">{label}</Label>
    {children}
  </div>
);

export default FieldGroup;
