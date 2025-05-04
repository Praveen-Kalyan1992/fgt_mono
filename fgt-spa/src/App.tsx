import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(to right bottom, #e0ced8, #deccdb, #d9cae0, #d3c9e4, #c9c9e9, #c7c8ed, #c5c8f0, #c3c7f4, #cec4f6, #dcc0f5, #eabcf1, #f8b8eb)"
        // backgroundImage:
        //   "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
      }}
    >
      <Routes />
    </Box>
  );
};

export default App;
