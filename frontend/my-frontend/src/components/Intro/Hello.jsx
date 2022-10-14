import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Hello() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          textAlign: "center",
        }}>
        <Typography variant='h2'>
          Hello I'm Sam DeFrancisco<br></br>
        </Typography>
      </Paper>
    </>
  );
}
