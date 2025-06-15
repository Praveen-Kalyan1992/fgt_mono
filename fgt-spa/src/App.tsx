import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  // useTheme,
  useMediaQuery,
  CssBaseline,
  Switch,
  createTheme,
  ThemeProvider,
  Divider,
  ListItemIcon,
  useTheme,
  // Breadcrumbs,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Footer from "./pages/Footer/Footer";

const navItems = [
  { text: "Home", icon: <HomeIcon />, path: "/home" },
  { text: "About", icon: <InfoIcon />, path: "/about" },
  { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
];

const App: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >900px

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          {/* {!isMobile && (
            <Box sx={{ width: 240, bgcolor: "background.paper", borderRight: 1, borderColor: "divider" }}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  My Website
                </Typography>
              </Toolbar>
              <Divider />
              <List>
                {navItems.map(({ text, icon, path }) => (
                  // button
                  <ListItem component={Link} to={path} key={text}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )} */}

          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            {/* <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {isMobile && "My Website"}
                </Typography>
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                {isMobile && (
                  <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                )}
              </Toolbar>
            </AppBar> */}

            {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer> */}

            <Box component="main" sx={{ flexGrow: 1 }}>
              <AppRoutes />
            </Box>

            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
