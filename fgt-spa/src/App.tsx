import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
    className="bg-neutral-900"
      sx={{
        width: "100%",
        // backgroundImage: "linear-gradient(to right bottom, #e0ced8, #deccdb, #d9cae0, #d3c9e4, #c9c9e9, #c7c8ed, #c5c8f0, #c3c7f4, #cec4f6, #dcc0f5, #eabcf1, #f8b8eb)"
      }}
    >
      <Routes />
    </Box>
  );
};

export default App;
