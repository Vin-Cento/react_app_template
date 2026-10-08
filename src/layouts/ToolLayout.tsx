import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Outlet } from "react-router-dom";
import ThemeButton from "../components/ThemeButton"

function ToolLayout() {

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh" }}>

      {/* Google Maps-style tool bar */}
      <Drawer variant="permanent" >

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
                <DashboardIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Wallet" placement="right">
              <IconButton
                sx={{
                  width: 48, height: 48, borderRadius: 2,
                  "&:hover": { bgcolor: "action.hover" },
                }}
                size="large">
                <AccountBalanceWalletIcon />
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
