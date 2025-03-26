import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput
} from "@mui/material";
import SelectInput, {
  SelectChangeEvent
} from "@mui/material/Select/SelectInput";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Select from "@mui/material/Select";
import React from "react";

interface FilterSelectProps {
  placeholder: string;
  filterList: string[];
}

export default function FilterSelect(props: FilterSelectProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>{props.placeholder}</InputLabel>
      <Select
        value={age}
        input={<OutlinedInput label={props.placeholder} />}
        onChange={handleChange}
        className="bg-white"
      >
        {props.filterList.map((item) => (
          <MenuItem value={item} key={item} className="w-full">
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
