import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes } from "react";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function LabeledInput({ label, id, ...inputProps }: LabeledInputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
}
