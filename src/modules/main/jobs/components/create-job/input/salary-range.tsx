import { NumericFormat } from "react-number-format";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

const MoneyInput = ({ onChange, value }: Props) => {
  return (
    <NumericFormat
      prefix="₦"
      value={value}
      thousandSeparator
      allowNegative={false}
      placeholder="e.g 85000"
      className="border p-4 shadow rounded-xl focus:outline-none focus:ring-1 focus:ring-muted transition-all dark:bg-input/30 font-bold text-md"
      onValueChange={(values) => {
        onChange(values.floatValue ?? null);
      }}
    />
  );
};

export default MoneyInput;
