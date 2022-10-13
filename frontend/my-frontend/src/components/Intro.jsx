import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import mePic from "../static/pics/wide-green.jpg";
import cyPNG from "../static/pics/isuCy.png";
import FeatureList from "./FeatureList.jsx";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <Container maxWidth='xl' sx={{ marginY: 4 }}>
        <Paper sx={{ borderRadius: 5 }}>
          <Grid container spacing={0} sx={{ height: 600 }}>
            <Grid item xs={6} sx={{ paddingTop: "0px" }}>
              <Paper
                elevation={15}
                sx={{
                  borderRadius: 2,
                  textAlign: "center",
                }}>
                <br></br>
                <br></br>
              </Paper>

              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <FeatureList />
                </Grid>
                <Divider orientation='vertical' flexItem sx={{ mr: "-1px" }} />
                <Grid
                  item
                  xs={8}
                  sx={{
                    justifyContent: "center",
                    textAlign: "center",
                  }}>
                  <Paper
                    elevation={5}
                    sx={{
                      textAlign: "center",
                    }}>
                    <Typography variant='h2'>
                      Hello I'm Sam DeFrancisco<br></br>
                    </Typography>
                  </Paper>
                  <Avatar
                    src={cyPNG}
                    alt='cy'
                    sx={{
                      marginTop: 2,
                      ml: "auto",
                      mr: "auto",
                      height: 200,
                      width: 200,
                      border: 1,
                      overflow: "visible",
                      padding: 0,
                    }}></Avatar>
                </Grid>
              </Grid>

              <br></br>
              <br></br>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                maxWidth: 500,
                backgroundImage: `url(${mePic})`,
                backgroundPosition: "center",
              }}></Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
