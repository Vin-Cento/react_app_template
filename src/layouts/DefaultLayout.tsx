import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Outlet } from "react-router-dom";
import ThemeSwitch from "../components/ThemeSwitch";

const drawerWidth = 240;

function DefaultLayout() {

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Top navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Awesome App
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button>
            Request
          </Button>
          <Button>
            Donate
          </Button>

          <ThemeSwitch />
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>

              <ListItemText primary="Goals" />
            </ListItemButton>
          </List>

          <Divider />

          <List>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Page content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default DefaultLayout;
