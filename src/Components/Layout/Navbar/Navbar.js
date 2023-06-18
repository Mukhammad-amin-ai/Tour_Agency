import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../../Assets/Image/logo-creative-1.png";
import { Link } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";
export default function Navbar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItemsL: "center",
        }}
      >
        <Link>
          <Box
            sx={{
              width: "10vw",
              height: "100%",
              backgroundImage: `url(${Logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Box>
        </Link>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              gap: "20px",
            }}
          >
            <li>About Us</li>
            <li>Tours</li>
            <li>Gallery</li>
            <li>Destination</li>
          </ul>
        </Box>
        <Box
          sx={{
            width: "20%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              id={"panel-header"}
              aria-controls="panel1-content"
              expandIcon={<ExpandMore />}
            >
              <Typography>$ usd</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Rub</Typography>
              <Typography>Uzs</Typography>
              <Typography>Usd</Typography>
            </AccordionDetails>
          </Accordion>
          <Button sx={{ backgroundColor: "#283a2c" }}>
            <Typography sx={{ color: "#fff" }}>Contact Us</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
