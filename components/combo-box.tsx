"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const currencies = [
  {
    value: "czk",
    label: "Czech Koruna",
  },
  {
    value: "eur",
    label: "Euro",
  },
  {
    value: "usd",
    label: "US Dollar",
  },
  {
    value: "gbp",
    label: "British Pound",
  },
  {
    value: "pln",
    label: "Polish Zloty",
  },
  {
    value: "jpy",
    label: "Japanese Yen",
  },
  {
    value: "cad",
    label: "Canadian Dollar",
  },
  {
    value: "chf",
    label: "Swiss Franc",
  },
];

type TComboBox = {
  mainText: string;
  value: string;
  setValue: (value: string) => void;
};

export function Combobox({ mainText, value, setValue }: TComboBox) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? currencies.find((currency) => currency.value === value)?.label
            : mainText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandEmpty>No currency found.</CommandEmpty>
          <CommandGroup>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === currency.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {currency.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
