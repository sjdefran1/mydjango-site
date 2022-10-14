import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import mePic from "../../static/pics/wide-green.jpg";
import FeatureList from "../FeatureList.jsx";
import IntroTabs from "./IntroTabs.jsx";
import Hello from "./Hello.jsx";
import School from "./School.jsx";
import "./Intro.css";

export default function Intro() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor='secondary'
                    indicatorColor='secondary'
                    aria-label='secondary tabs example'>
                    <Tab value='one' label='Intro' />
                    <Tab value='two' label='School' />
                    <Tab value='three' label='Bing Bong' />
                  </Tabs>
                </Box>
              </Paper>
              {value === "one" && <Hello />}
              {value === "two" && <School />}
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
