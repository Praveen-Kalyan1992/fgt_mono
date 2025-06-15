import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { webServices } from "../Layout/Layout";
import useBreadcrumbs from "../../../utils/hooks/useBreadcrumbs";

const OurServices = () => {
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
          top: isMobile ? "200px" : isTablet ? "200px" : "177px",
          position: "relative",
          width: "100%",
          height: "982px",
          bgcolor: "#69000b",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "982px",
            bgcolor: "background.paper",
            borderRadius: "0 280px 0 0",
            overflow: "hidden",
          }}
        >
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
              OUR SERVICES
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "1210px",
              height: "770px",
              top: "181px",
              left: "139px",
              transform: "rotate(0.34deg)",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "589px",
                height: "720px",
                position: "absolute",
                top: "16px",
                left: "16px",
                bgcolor: "#4d597566",
                borderRadius: "32px 0 0 0",
                overflow: "hidden",
              }}
            >
              <List sx={{ width: "100%", p: 0 }}>
                {webServices.map((service, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      p: 4,
                      bgcolor: index < 2 ? "#202e52" : "#202e52cc",
                      borderBottom: index < 2 ? "2px solid #ff7070" : "none",
                      flexGrow: 1,
                    }}
                    onClick={() => console.log(`Service ${index + 1} clicked`)}
                  >
                    {(
                      <>
                        <Box
                          sx={{
                            width: "86.33px",
                            height: "100%",
                            bgcolor: "#ffffff66",
                            borderRadius: "100px",
                          }}
                        />
                        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: "2rem",
                              letterSpacing: "0.72px",
                              lineHeight: "2rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>
                      </>
                    )}
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                width: "589px",
                height: "720px",
                top: "50px",
                left: "610px",
                borderRadius: "0 0 32px 0",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(153,67,67,1) 0%, rgba(255,112,112,1) 100%)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "594px",
                  height: "471px",
                  top: "-21px",
                  left: "-3px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "592px",
                    height: "468px",
                    top: "2px",
                    left: "1px",
                    transform: "rotate(-0.34deg)",
                    position: "absolute",
                    objectFit: "cover",
                  }}
                  alt="Image"
                  src="./image-4.png"
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    width: "97px",
                    height: "97px",
                    top: "332px",
                    left: "495px",
                    transform: "rotate(-0.34deg)",
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 60, color: "white" }} />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    width: "97px",
                    height: "97px",
                    top: "332px",
                    left: "0.5px",
                    transform: "rotate(-0.34deg)",
                  }}
                >
                  <ChevronLeftIcon sx={{ fontSize: 60, color: "white" }} />
                </IconButton>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurServices;
