import React from "react";
import { Box } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      position: "relative",
      width: "100%",
      height: "543px",
      bgcolor: "background.paper",
      overflow: "hidden",
    }}
  >
    <Box
      component="img"
      sx={{
        width: "1544px",
        height: "152px",
        position: "absolute",
        top: "391px",
        left: "-16px",
        objectFit: "cover",
      }}
      alt="Image"
      src="./image-2.png"
    />
  </Box>
);

export default Footer;