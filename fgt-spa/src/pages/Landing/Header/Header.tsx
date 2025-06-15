import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

// Navigation items data
const navItems = [
  { name: "HOME", active: true },
  { name: "ABOUT", active: false, href: "/about" },
  { name: "SERVICES", active: false, href: "/services" },
  { name: "PORTFOLIO", active: false, href: "/portfolio" },
  {
    name: "CONTACT US",
    active: false,
    href: "/contact",
  },
];

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth={false} disableGutters>
        <Toolbar sx={{ height: "100px", px: 4, py: 3 }}>
          {/* Left Navigation */}
          <Stack
            direction="row"
            spacing={0}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            {navItems.map((item) => (
              <Box
                key={item.name}
                sx={{
                  px: 3,
                  py: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.href ? (
                  <Typography
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontFamily: "'Roboto-SemiBold', Helvetica",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: item.active ? "secondary.main" : "text.primary",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontFamily:
                        item.name === "ABOUT"
                          ? "'Signika-SemiBold', Helvetica"
                          : "'Roboto-SemiBold', Helvetica",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: item.active ? "secondary.main" : "text.primary",
                    }}
                  >
                    {item.name}
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>

          {/* Center Logo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", width: 50, height: 50 }}>
              <Box
                sx={{
                  position: "relative",
                  width: 40,
                  height: 40,
                  top: 5,
                  left: 5,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: 30,
                    height: 30,
                    top: 5,
                    left: 5,
                    borderRadius: "50%",
                    border: "1px solid #ff6666",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: 40,
                    height: 3,
                    top: 18,
                    left: 0,
                   bgcolor: "primary.main",
                    borderRadius: "60px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: 40,
                    height: 3,
                    top: 18,
                    left: 0,
                    bgcolor: "primary.main",
                    borderRadius: "60px",
                    transform: "rotate(90deg)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: 6,
                    height: 6,
                    top: 17,
                    left: 17,
                    bgcolor: "background.paper",
                    borderRadius: "3px",
                  }}
                />
              </Box>
            </Box>
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontFamily: "'Montserrat-SemiBold', Helvetica",
                fontWeight: 600,
                fontSize: "16px",
                color: "000000",
                lineHeight: "normal",
              }}
            >
              Futuristic Global&nbsp;&nbsp;
              <br />
              Technologies
            </Typography>
          </Box>

          {/* Right Side Elements */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ flexGrow: 1 }}
          >
            {/* Phone Contact */}
            <Stack direction="row" spacing={3} alignItems="center">
              <PhoneIcon sx={{ width: 35.52, height: 35, color: "secondary.main" }} />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    height: "20px",
                    fontFamily: "'Signika-Regular', Helvetica",
                    fontSize: "16px",
                    color: "text.secondary",
                  }}
                >
                  Call us Now
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    height: "20px",
                    fontFamily: "'Signika-Medium', Helvetica",
                    fontSize: "16px",
                    color: "text.tertiary",
                  }}
                >
                  +91 9789371620
                </Typography>
              </Box>
            </Stack>

            {/* Search Button */}
            <IconButton
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#ef6d58",
                borderRadius: "24px",
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }}
            >
              <SearchIcon sx={{ color: "white", width: 16, height: 16 }} />
            </IconButton>

            {/* Get In Touch Button */}
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon sx={{ width: 16, height: 16 }} />}
              sx={{
                width: 183.34,
                height: 60,
                borderRadius: "30px",
                fontFamily: "'Signika-Medium', Helvetica",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
