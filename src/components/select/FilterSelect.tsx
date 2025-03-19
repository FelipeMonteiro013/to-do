import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Select } from "radix-ui";
import React from "react";

interface FilterSelectProps {
  placeholder: string;
  filterList: string[];
}

export default function FilterSelect(props: FilterSelectProps) {
  return (
    <Select.Root>
      <Select.Trigger className=" p-2 rounded-md inline-flex items-center justify-between w-48 border border-gray-300 bg-[#FFF]">
        <Select.Value placeholder={props.placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content
        className="bg-white w-48 p-2 rounded-b-md shadow-lg"
        position="popper"
      >
        <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport>
          {props.filterList.map((filter) => (
            <Select.Item key={filter} value={filter} className="p-1">
              {filter}
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
}
