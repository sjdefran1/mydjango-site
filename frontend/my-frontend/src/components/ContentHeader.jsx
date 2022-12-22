import React from "react";
import { Typography, Paper, Divider } from "@mui/material";

function ContentHeader({ name }) {
  return (
    <>
      <Paper
        elevation={15}
        sx={{
          minHeight: "10%",
          opacity: "90%",

          ml: "35%",
          mr: "35%",
          fontFamily: "Roboto Condensed",
          borderRadius: 2,

          textAlign: "center",
        }}>
        <Typography variant='h3' p sx={{ opacity: "100%" }}>
          {name}
        </Typography>
      </Paper>
      <Divider
        color='white'
        sx={{ mb: 2, ml: "10%", mr: "10%", opacity: "30%" }}></Divider>
    </>
  );
}

export default ContentHeader;
