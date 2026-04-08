"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "../../libs/utils";

interface Props {
  title: string;
  inputtedDate?: Date;
  onSelect?: (val: Date | undefined) => void;
}
export function DatePicker({ title, inputtedDate, onSelect }: Props) {
  const [open, setOpen] = React.useState(false);

  const formattedDate = formatDate(inputtedDate ?? null);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Label htmlFor="date" className="px-1">
        {title}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full h-14 justify-between font-normal"
          >
            {inputtedDate ? formattedDate : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={inputtedDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              setOpen(false);
              onSelect?.(date);
            }}
            animate
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
