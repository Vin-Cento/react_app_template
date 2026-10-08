import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import ThemeSwitch from "../components/ThemeSwitch";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "architecture", label: "Architecture" },
  { id: "database", label: "Database" },
  { id: "api", label: "API" },
  { id: "conclusion", label: "Conclusion" },
];


function BlogLayout() {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "220px minmax(0, 1fr)",
        },
        gap: 4,
        py: 4,
      }}
    >
      {/* Top navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          // maxWidth: ""
        }}
      >
        <Container>
          <Toolbar
            sx={{
              "& .nav-button": {
                alignSelf: "stretch",
                borderRadius: 0,
              },
            }}

          >
            <Typography variant="h6" noWrap>
              Awesome App
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              color="inherit"
              component={Link} to="/request"
              className="nav-button"
            >
              Request
            </Button>
            <Button
              color="inherit"
              component={Link} to="/donate"
              className="nav-button"
            >
              Donate
            </Button>

            <ThemeSwitch />
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="aside"
        sx={{
          bgcolor: "background.default",
          display: {
            xs: "none",
            lg: "block",
          },
          margin: 5,
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 80,
          }}
        >
          <Typography
            variant="overline"
            color="text.secondary"
          >
            On this page
          </Typography>

          <List dense>
            {sections.map((section) => (
              <ListItemButton
                key={section.id}
                component="a"
                href={`#${section.id}`}
              >
                <ListItemText primary={section.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>

      {/* Blog */}
      <Box
        component="main"
        sx={{
          minWidth: 0,
          maxWidth: 800,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Container>
  );
}

export default BlogLayout;
