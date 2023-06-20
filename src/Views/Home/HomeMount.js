import { Box, Typography } from "@mui/material";
import React from "react";
import mount from "../../Assets/Image/mountain-cutout-2.jpg";
import footer from "../../Assets/Image/footer-clouds.png";
export default function HomeMount() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${mount})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection:'column'
          }}
        >
            <Typography variant="h5">
            THE WORLD IS AT YOUR FEET
            </Typography>
            <Typography variant="h3">
            Receive inspiration in your inbox
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}
