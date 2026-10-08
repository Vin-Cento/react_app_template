import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={(_, value) => {
        if (value !== null) {
          setMode(value);
        }
      }}
    >
      <ToggleButton value="light">
        Light
      </ToggleButton>

      <ToggleButton value="dark">
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
