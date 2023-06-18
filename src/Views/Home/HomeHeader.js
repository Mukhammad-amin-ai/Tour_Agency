import { Box } from "@mui/material";
import React from "react";
import registan from "../../Assets/Image/Registan.jpg";
import Navbar from "../../Components/Layout/Navbar/Navbar";
export default function HomeHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${registan})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar/>
    </Box>
  );
}
