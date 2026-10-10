import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Outlet } from "react-router-dom";
import ThemeButton from "../components/ThemeButton"
import AssistantIcon from '@mui/icons-material/Assistant';

function ToolLayout() {

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh" }}>

      {/* Google Maps-style tool bar */}
      <Drawer variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "primary.dark",
            color: "secondary.contrastText",
          },
        }}
      >

        <Stack
          sx={{
            alignItems: "center",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
            }}
          >
            <Tooltip title="Dashboard" placement="right">
              <IconButton
                sx={{
                  width: 48, height: 48, borderRadius: 2,
                  "&:hover": { bgcolor: "action.hover" },
                }}
                size="large">
                <AssessmentIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Dashboard" placement="right">
              <IconButton
                sx={{
                  width: 48, height: 48, borderRadius: 2,
                  "&:hover": { bgcolor: "action.hover" },
                }}
                size="large">
                <AssistantIcon />
              </IconButton>
            </Tooltip>

          </Stack>
          <Stack
            sx={{
              mt: "auto",
              alignItems: "center",
            }}
          >
            <Divider flexItem />

            <Tooltip title="Theme" placement="right">
              <ThemeButton />
            </Tooltip>

            <Tooltip title="Settings" placement="right">
              <IconButton
                sx={{
                  width: 48, height: 48, borderRadius: 2,
                  "&:hover": { bgcolor: "action.hover" },
                }}
                size="large">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Stack>

        </Stack>
      </Drawer>


      <Toolbar />
      <Outlet />
    </Box>
  );
}

export default ToolLayout;
