import React from "react";
import { Box, Typography } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import women from '../../../assets/images/woman.png'
import representation from '../../../assets/images/representation.png'


const HeroSection = () => (
  <Box
    sx={{
      p: 4,
      bgcolor: "background.paper",
      height: "882px",
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
          width: "1184px",
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
            sx={{
              position: "absolute",
              width: "380px",
              height: "380px",
              top: "-30px",
              left: "-30px",
              objectFit: "cover",
            }}
            alt="Woman looking color"
            src={women}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "888px",
            height: "448px",
            top: "120px",
            left: "296px",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "889px",
              height: "448px",
              position: "absolute",
              objectFit: "cover",
            }}
            alt="Image"
            src="./image-1.png"
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "280px",
          height: "380px",
          top: "228px",
          left: "1200px",
          borderRadius: "32px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            width: "400px",
            height: "400px",
            top: "-10px",
            left: "-60px",
          }}
          alt="Representation user"
          src={representation}
        />
      </Box>
      {/* <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "245px",
          left: "374px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        We grow with your business, not just deliver and disappear.
      </Typography> */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "93px",
          left: "222px",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit
      </Typography>
    </Box>
  </Box>
);

const ServiceIcon = (props: any) => <ScreenShareIcon sx={{ fontSize: 60 }} {...props} />;
const PlaceholderIcon = (props: any) => (
  <Box sx={{ width: 80, height: 80, bgcolor: "#d9d9d9", borderRadius: "100px" }} {...props} />
);

HeroSection.ServiceIcon = ServiceIcon;
HeroSection.PlaceholderIcon = PlaceholderIcon;

export default HeroSection;