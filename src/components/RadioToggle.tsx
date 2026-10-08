import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function RadioToggle() {
  const [value, setValue] = useState("light");

  return (
    <FormControl>
      <RadioGroup
        row
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <FormControlLabel
          value="light"
          control={<Radio />}
          label="Light"
        />

        <FormControlLabel
          value="dark"
          control={<Radio />}
          label="Dark"
        />
      </RadioGroup>
    </FormControl>
  );
}
