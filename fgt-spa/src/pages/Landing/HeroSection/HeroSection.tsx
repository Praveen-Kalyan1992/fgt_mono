import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import women from "../../../assets/images/woman.png";
import representation from "../../../assets/images/representation.png";
import main from "../../../assets/images/main.png";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >900px

  return (
    <Box
      sx={{
        top: "40px",
        p: 4,
        bgcolor: "background.paper",
        height: "898px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "850px",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "568px",
            top: "298px",
            left: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "320px",
              height: "320px",
              top: 0,
              left: 0,
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              sx={
                isMobile
                  ? {
                      width: "380px",
                      height: "380px",
                      top: "-30px",
                      left: "-30px",
                      objectFit: "cover",
                    }
                  : {
                      width: "380px",
                      height: "380px",
                      top: "-30px",
                      left: "-30px",
                      objectFit: "cover",
                    }
              }
              alt="Woman looking color"
              src={women}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "500px",
              top: "120px",
              left: "296px",
            }}
          >
            <Box
              component="img"
              sx={
                isTablet || isMobile
                  ? {
                      height: "500px",
                      position: "absolute",
                    }
                  : {
                      width: "55%",
                      height: "500px",
                      position: "absolute",
                    }
              }
              alt="Image"
              src={main}
            />
          </Box>
          <Box
            sx={
              isTablet || isMobile
                ? {
                    position: "absolute",
                    width: "280px",
                    height: "380px",
                    top: "330px",
                    left: "1250px",
                    borderRadius: "32px",
                    overflow: "hidden",
                  }
                : {
                    position: "absolute",
                    width: "280px",
                    height: "380px",
                    top: "15px",
                    left: "1180px",
                    borderRadius: "32px",
                    overflow: "hidden",
                  }
            }
          >
            <Box
              component="img"
              sx={{
                width: "280px",
                height: "380px",
                top: "-10px",
                left: "-60px",
              }}
              alt="Representation user"
              src={representation}
            />
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "175px",
            left: "374px",
            textAlign: "center",
            whiteSpace: "nowrap",
            width: "63px",
            height: "36px",
            fontSize: "24px",
          }}
        >
          We grow with your business, not just deliver and disappear.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 100,
            fontSize: "65px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit
        </Typography>
      </Box>
    </Box>
  );
};

const ServiceIcon = (props: any) => (
  <ScreenShareIcon sx={{ fontSize: 60 }} {...props} />
);
const PlaceholderIcon = (props: any) => (
  <Box
    sx={{ width: 80, height: 80, bgcolor: "#d9d9d9", borderRadius: "100px" }}
    {...props}
  />
);

HeroSection.ServiceIcon = ServiceIcon;
HeroSection.PlaceholderIcon = PlaceholderIcon;

export default HeroSection;
