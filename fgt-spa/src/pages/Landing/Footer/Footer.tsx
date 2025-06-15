import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "./Card/Card";
import { footerCards } from "../Layout/Layout";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      top: "200px",
      position: "relative",
      width: "100%",
      height: "500px",
      bgcolor: "background.paper",
      overflow: "hidden",
    }}
  >
    <Grid
      container
      spacing={8}
      sx={{
        maxWidth: "100%",
        overflowX: "hidden",
        height: "280px",
        position: "absolute",
        left: "127px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
      }}
    >
      {footerCards.map((card, index) => (
        <Grid key={index} size={{ xs: 3, md: 4 }}>
          <Card />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Footer;
