import React from "react";
import { Typography, Paper, Divider, Grid } from "@mui/material";

function ContentHeader({ name }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Paper
            elevation={15}
            sx={{
              minHeight: "10%",
              opacity: "90%",

              ml: "20%",
              mr: "20%",
              overflow: "auto",
              fontFamily: "Roboto Condensed",
              borderRadius: 2,

              textAlign: "center",
            }}>
            <Typography
              variant='h3'
              p
              sx={{
                opacity: "100%",
                fontFamily: "Roboto Condensed",
                color: "info",
              }}>
              {name}
            </Typography>
          </Paper>
          <Divider
            color='white'
            sx={{ mb: 2, ml: "10%", mr: "10%", opacity: "30%" }}></Divider>
        </Grid>
      </Grid>
    </>
  );
}

export default ContentHeader;
