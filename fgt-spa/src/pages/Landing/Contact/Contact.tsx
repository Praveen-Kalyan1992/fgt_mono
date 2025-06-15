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

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

const position: [number, number] = [13.0827, 80.2707]; // Chennai coordinates
// Dummy Map component for demonstration
const Map = () => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      borderRadius: 3,
      overflow: "hidden",
      background: "#e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url(/map.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* You can replace this with an actual map (e.g., Google Maps, Leaflet, etc.) */}
    <MapContainer
      // center={position}
      // zoom={13}
      // scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Our Chennai Office</Popup>
      </Marker>
    </MapContainer>
  </Box>
);

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
          top: "250px",
          width: "100%",
          minHeight: { xs: 900, md: 982 },
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // pt: { xs: 4, md: 8 },
          // pb: { xs: 4, md: 0 },
          position: "relative",
        }}
      >
        {/* Section Title */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
            mb: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: "bold",
              color: "#202e52",
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "0.96px",
              lineHeight: "2rem",
              whiteSpace: "normal",
              textAlign: "center",
            }}
          >
            CONTACT US
          </Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "stretch",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Contact Form */}
          <Paper
            elevation={4}
            sx={{
              flex: "0 1 420px",
              width: { xs: "100%", sm: 420, md: 470 },
              mx: "auto",
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              gap: 3,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "text.primary",
                textAlign: "left",
              }}
            >
              Get In Touch
            </Typography>
            <TextField
              fullWidth
              placeholder="Your email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  borderColor: "#f3d1bf",
                },
              }}
            />
            <FormControl fullWidth variant="outlined">
              <Select
                displayEmpty
                defaultValue=""
                renderValue={(selected) =>
                  selected ? (
                    selected
                  ) : (
                    <span style={{ color: "#888" }}>Subject</span>
                  )
                }
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
            <TextField
              fullWidth
              placeholder="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  borderColor: "#f3d1bf",
                },
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                height: 48,
                borderRadius: "6px",
                fontFamily: "Epilogue, Helvetica",
                fontWeight: 900,
                textTransform: "uppercase",
                mt: 2,
              }}
            >
              SUBMIT NOW
            </Button>
          </Paper>

          {/* Map and Location Icon */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              position: "relative",
              height: { xs: 300, md: 525 },
              borderRadius: 4,
              overflow: "hidden",
              mt: { xs: 2, md: 0 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Map />
            <IconButton
              sx={{
                position: "absolute",
                bottom: 24,
                right: 24,
                width: 56,
                height: 56,
                bgcolor: "#ef6d58",
                borderRadius: "50%",
                boxShadow: 3,
                "&:hover": {
                  bgcolor: "#d45e4a",
                },
              }}
            >
              <LocationOnIcon sx={{ color: "white", fontSize: 32 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
