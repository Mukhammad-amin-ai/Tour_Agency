import { Box, Button, Typography } from "@mui/material";
import React from "react";
import culture from "../../Assets/Image/cultural.jpg";
import historical from "../../Assets/Image/historical.jpg";
import adventure from "../../Assets/Image/adventure.jpeg";
import user from "../../Assets/Image/img_568657.png";
import user2 from "../../Assets/Image/Group-3.jpg";
export default function TourStyle() {
  return (
    <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          backgroundColor: "#f1efec",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h6">TRAVEL IN STYLE</Typography>
          <Typography variant="h3">Find travel inspiration by</Typography>
          <Typography variant="h6">
            <i>style</i>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            width: "360px",
            height: "800px",
            position: "absolute",
            top: "60vh",
            left: "15vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70%",
              backgroundImage: `url(${culture})`,
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          ></Box>
          <Typography>
            Luxury family safaris and inspiring wildlife adventures with a
            positive impact.
          </Typography>
          <Button
            sx={{
              width: "200px",
              height: "50px",
              border: "1px solid #283A2C",
              borderRadius: "20px",
            }}
          >
            <Typography color={"#000"}>Discover More</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "800px",
            position: "absolute",
            top: "70vh",
            left: "40vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70%",
              backgroundImage: `url(${adventure})`,
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          ></Box>
          <Typography>
            Luxury family safaris and inspiring wildlife adventures with a
            positive impact.
          </Typography>
          <Button
            sx={{
              width: "200px",
              height: "50px",
              border: "1px solid #283A2C",
              borderRadius: "20px",
            }}
          >
            <Typography color={"#000"}>Discover More</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "800px",
            position: "absolute",
            top: "60vh",
            right: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70%",
              backgroundImage: `url(${historical})`,
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          ></Box>
          <Typography>
            Luxury family safaris and inspiring wildlife adventures with a
            positive impact.
          </Typography>
          <Button
            sx={{
              width: "200px",
              height: "50px",
              border: "1px solid #283A2C",
              borderRadius: "20px",
            }}
          >
            <Typography color={"#000"}>Discover More</Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="p">
            GET A GLIMPSE OF WHAT YOU CAN EXPERIENCE
          </Typography>
          <Typography variant="h3">Inspiring</Typography>
          <Typography variant="h4">
            <i>stories</i>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "150vh", position: "relative" }}>
          <Box
            sx={{
              width: "330px",
              height: "700px",
              position: "absolute",
              left: "25vw",
              display: "flex",
              flexDirection: "column",
              gap:"10px"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "70%",
                backgroundImage: `url(${user})`,
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat"
              }}
            ></Box>
            <Typography variant="h4">How to choose a responsible tour operator</Typography>
            <Typography>About Cretive Tours</Typography>
            <Button sx={{width:"300px",height:"50px",borderBottom:'1px solid'}}>READ STORY</Button>
          </Box>
          <Box
            sx={{
              width: "330px",
              height: "700px",
              position: "absolute",
              top:"30vh",
              left: "60vw",
              display: "flex",
              flexDirection: "column",
              gap:"10px"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "70%",
                backgroundImage: `url(${user2})`,
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat"
              }}
            ></Box>
            <Typography variant="h4">How to choose a responsible tour operator</Typography>
            <Typography>About Cretive Tours</Typography>
            <Button sx={{width:"300px",height:"50px",borderBottom:'1px solid'}}>READ STORY</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
