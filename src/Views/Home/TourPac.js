import { Box, Typography } from "@mui/material";
import React from "react";
import buxara from "../../Assets/Image/buxara.jpg";
export default function TourPac() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f1efec",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          textAlign: "start",
          gap: "10px",
        }}
      >
        <Typography variant="h5">Example trips</Typography>
        <Typography variant="h4">Get inspired</Typography>
        <Typography variant="p">
          Browse our example trips and get in contact to start planning your
          very own adventure.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "30%",
          height: "75%",
          backgroundImage: `url(${buxara})`,
          borderRadius: "20px",
          ":hover": {
            transform: "scale(1.1)",
            transition: ".3s all linear",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" color={"#fff"}>
          Tour package
        </Typography>
      </Box>
    </Box>
  );
}
