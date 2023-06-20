import { Box, Button, TextField } from "@mui/material";
import React from "react";

export default function HomeForm() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        backgroundColor: "#eae8e3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "40vw",
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        <TextField id="standard-basic" label="E-mail" variant="standard" />
        <TextField
          id="standard-basic"
          label="Latter"
          variant="standard"
          fullWidth
        />
      </Box>
      <Button sx={{ border: "1px solid", color: "#000" }}>send letter</Button>
    </Box>
  );
}
