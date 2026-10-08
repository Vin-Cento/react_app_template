import { Sunny } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { toggleTheme } from "../store/settingSlice"
import { useDispatch, useSelector } from "react-redux"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import type { RootState } from "../store/store";

function ThemeButton() {
  const dispatch = useDispatch()
  const mode = useSelector(
    (state: RootState) => state.setting.theme
  );
  return (
    <>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        sx={{
          width: 48, height: 48, borderRadius: 2,
          "&:hover": { bgcolor: "action.hover" },
        }}
        size="large">
        {mode === "light" && <Sunny />}
        {mode === "dark" && <DarkModeIcon />}
      </IconButton>
    </>
  )
}

export default ThemeButton
