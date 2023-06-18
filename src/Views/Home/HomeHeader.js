import { Box, Typography } from "@mui/material";
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
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign:'center',
            gap:'10%'
          }}
        >
          <Typography variant="p">
            CONNECTING YOUR JOURNEY WITH PURPOSE
          </Typography>
          <Typography variant="h3">
            Unforgettable travel experiences with a positive impact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
