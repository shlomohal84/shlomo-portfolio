import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{ bgcolor: "#1976d2", color: "white", height: "3em" }}
      component="footer"
    >
      <Typography variant="subtitle1" align="center" gutterBottom>
        Footer
      </Typography>
      {/* <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography> */}
    </Box>
  );
}
