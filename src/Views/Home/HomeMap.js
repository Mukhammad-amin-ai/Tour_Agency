import { Box, Button, Typography } from "@mui/material";
import React from "react";
import uzbekistan from "../../Assets/Image/4aa7439ad1c7de51f56d614d10e59584.jpg";
import map from "../../Assets/Image/maped.png";
export default function HomeMap() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${uzbekistan})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap:"20px"
      }}
    >
      <img style={{ width: "50%", height: "70%" }} src={map} alt="map" />
      <Typography variant="h4">
        I want to explore 
      </Typography>
      <Typography variant="h3">
        Uzbekistan
      </Typography>
      <Button sx={{width:"200px",height:"50px",border:"1px solid #fff",borderRadius:"20px"}}>
        <Typography fontWeight={"600"} color={"#000"}>
            Explore more
        </Typography>
      </Button>
    </Box>
  );
}
