import { Box as MuiBox } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <MuiBox
      sx={{
        width: "400px",
        height: "250px",
        borderRadius: "32px",
        border: "1px solid #f3d1bf",
      }}
    />
  );
};

export default Card;
