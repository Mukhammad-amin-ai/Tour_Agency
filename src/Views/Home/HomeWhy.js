import React from "react";
import { Box, Typography } from "@mui/material";
import why from "../../Assets/Image/68ba3c5fba893ef5313fcb9a5dcf534a.jpg";
import why2 from "../../Assets/Image/shohizinda.jpg";
export default function HomeWhy() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#283a2c",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "23.33%", height: "100%", position: "relative" }}>
          <Box
            sx={{
              width: "300px",
              height: "210px",
              position: "absolute",
              top: "60vh",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "10px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "30px" }}>
              <i class="fa-solid fa-map-location-dot"></i>
            </Typography>
            <Typography variant="h5">Unforgettable experiences</Typography>
            <Typography>
              Creating your trip is entirely collaborative and our Travel
              Researchers are here for every step.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "210px",
              position: "absolute",
              top: "90vh",
              left: "150px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "10px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "30px" }}>
              <i class="fa-solid fa-globe"></i>
            </Typography>
            <Typography variant="h5">Positive impact</Typography>
            <Typography>
              Curated sustainable experiences and accommodation that maximize
              the benefits to local people and place.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "53.33%", height: "100%", position: "relative" }}>
          <Box
            sx={{
              width: "400px",
              height: "200px",
              position: "absolute",
              top: "10vh",
              left: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography>WHAT MAKES US DIFFERENT</Typography>
            <Typography>Why Creative Tours</Typography>
          </Box>
          <Box
            sx={{
              width: "70%",
              height: "70vh",
              position: "absolute",
              top: "30vh",
              left: "180px",
              display:"flex",
              alignItems:"center",
              flexDirection:"column",
              
            }}
          >
              <img
                style={{ width: "80%", height: "50%",transform:"rotate(-5deg)",position:"absolute",top:"50px" }}
                src={why}
                alt="#"
              />
              <img
                style={{ width: "80%", height: "50%",transform:"rotate(5deg)",position:"absolute",top:'300px'  }}
                src={why2}
                alt="#"
              />
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "210px",
              position: "absolute",
              top: "120vh",
              left: "100px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "10px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "30px" }}>
              <i class="fa-solid fa-user-group"></i>
            </Typography>
            <Typography variant="h5">Fairness and transparency</Typography>
            <Typography>
              An open, competitive pricing structure that ensures more money
              goes to where it's needed in the destination.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "23.33%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: "10px",
            }}
          >
            <Typography variant="h5">
              Creative Tours is a forward-thinking travel company headquartered
              in Samarkand born out of a passion to do things differently.
            </Typography>
            <Typography variant="p">
              In Swahili, a Bantu language spoken by millions in Eastern,
              Central and Southern Africa, the name Niara means "with utmost
              purpose" and our team are united by a passion for exploration and
              a belief that the right kind of travel can make the world a better
              place.
            </Typography>
            <Typography variant="p">
              Our Travel Researchers are here to create incredible trips with a
              positive impact for you.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
