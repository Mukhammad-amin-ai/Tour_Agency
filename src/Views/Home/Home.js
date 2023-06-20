import { Box } from "@mui/material";
import React from "react";
import HomeHeader from "./HomeHeader";
import HomeWhy from "./HomeWhy";
import TourPac from "./TourPac";
import HomeMap from "./HomeMap";
import TourStyle from "./TourStyle";
import HomeMount from "./HomeMount";
import HomeForm from "./HomeForm";

export default function Home() {
  return (
      <Box sx={{ width: "100%", height: "auto"}}>
        <HomeHeader />
        <HomeWhy />
        <TourPac/>
        <HomeMap/>
        <TourStyle/>
        <HomeMount/>
        <HomeForm/>
      </Box>
  );
}
