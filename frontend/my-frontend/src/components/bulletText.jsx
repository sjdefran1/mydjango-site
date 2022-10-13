import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function listText(props) {
  return (
    <>
      <Box sx={{ justifyContent: "center" }} spacing={1}>
        <CircleIcon sx={{ height: "6px", width: "6px" }} />
        <Typography
          variant='caption'
          sx={{ fontWeight: "fontWeightLight", marginLeft: "3px" }}>
          {props.text}
          <br></br>
        </Typography>
      </Box>
    </>
  );
}
