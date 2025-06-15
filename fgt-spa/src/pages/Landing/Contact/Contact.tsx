import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useBreadcrumbs from "../../../utils/hooks/useBreadcrumbs";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >900px
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      {breadcrumbs}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "982px",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "720px",
            top: "262px",
            left: 0,
            backgroundImage: "url(/map.png)",
            backgroundSize: "100% 100%",
          }}
        >
          <Paper
            sx={{
              position: "absolute",
              width: "470px",
              height: "464px",
              top: "127px",
              left: "135px",
              borderRadius: "32px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "374px",
                height: "280px",
                top: "56px",
                left: "48px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  width: "374px",
                  height: "76px",
                  top: "28px",
                  left: 0,
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Your email"
                  variant="outlined"
                  sx={{
                    position: "absolute",
                    top: "28px",
                    left: 0,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                      borderColor: "#f3d1bf",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "374px",
                  height: "76px",
                  top: "92px",
                  left: 0,
                }}
              >
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{ position: "absolute", top: "28px", left: 0 }}
                >
                  <Select
                    displayEmpty
                    renderValue={() => "Subject"}
                    sx={{
                      borderRadius: "6px",
                      borderColor: "#f3d1bf",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                    <MenuItem value="sales">Sales</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "374px",
                  height: "124px",
                  top: "156px",
                  left: 0,
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{
                    position: "absolute",
                    top: "28px",
                    left: 0,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "6px",
                      borderColor: "#f3d1bf",
                    },
                  }}
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                position: "absolute",
                width: "154px",
                height: "48px",
                top: "368px",
                left: "268px",
                borderRadius: "6px",
                fontFamily: "Epilogue, Helvetica",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              SUBMIT NOW
            </Button>
          </Paper>
          <IconButton
            sx={{
              position: "absolute",
              width: "72px",
              height: "72px",
              top: "284px",
              left: "1051px",
              bgcolor: "#ef6d58",
              borderRadius: "36px",
              "&:hover": {
                bgcolor: "#d45e4a",
              },
            }}
          >
            <LocationOnIcon sx={{ color: "white", fontSize: 32 }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1032px",
            alignItems: "center",
            p: 4,
            position: "absolute",
            top: "80px",
            left: "240px",
            opacity: 0.8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#202e52",
              fontSize: "3rem",
              letterSpacing: "0.96px",
              lineHeight: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            CONTACT US
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
