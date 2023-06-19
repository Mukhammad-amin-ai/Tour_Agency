import { Box } from "@mui/material";
import React from "react";
import HomeHeader from "./HomeHeader";
import HomeWhy from "./HomeWhy";
import TourPac from "./TourPac";

export default function Home() {
  return (
      <Box sx={{ width: "100%", height: "auto"}}>
        <HomeHeader />
        <HomeWhy />
        <TourPac/>
      </Box>
  );
}
