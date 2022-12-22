import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import mePic from "../../static/pics/wide-green.jpg";
import dmPic from "../../static/pics/dm.jpg";
import FeatureList from "../FeatureList.jsx";
import IntroTabs from "./IntroTabs.jsx";
import Hello from "./Hello.jsx";
import School from "./School.jsx";
import "./Intro.css";

export default function Intro() {
  const [value, setValue] = React.useState("one");
  const gridRef = React.useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth='xl' sx={{ mt: 3, mb: 4 }}>
        <Grid container spacing={0} sx={{ minHeight: "75%" }}>
          <Grid item xs={6} ref={gridRef} sx={{ paddingTop: "0px" }}>
            <Paper
              elevation={20}
              sx={{
                borderRadius: "15px 0px 0px 0px",
                textAlign: "center",
              }}>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor='darkTheme.palette.secondary.light'
                  indicatorColor='secondary'
                  aria-label='secondary tabs example'>
                  <Tab value='one' label='Intro' />
                  <Tab value='two' label='School' />
                  <Tab value='three' label='Bing Bong' />
                </Tabs>
              </Box>
            </Paper>
            {value === "one" && <Hello />}
            {value === "two" && (
              <>
                <School gridRef={gridRef.current} />
              </>
            )}
          </Grid>
          {value === "one" && (
            <Fade in={true} timeout={1000}>
              <Grid
                item
                xs={6}
                sx={{
                  maxWidth: "50%",
                  borderRadius: "0px 15px 15px 15px",
                  backgroundImage: `url(${mePic})`,
                  backgroundPosition: "center",
                  minHeight: 800,
                  maxHeight: "100%",
                }}></Grid>
            </Fade>
          )}

          {value === "two" && (
            <Fade in={true} timeout={1000}>
              <Grid
                item
                xs={6}
                sx={{
                  maxWidth: "25%",
                  borderRadius: "0px 15px 15px 15px",
                  backgroundImage: `url(${dmPic})`,
                  backgroundPosition: "center",
                  minHeight: 800,
                  maxHeight: "100%",
                }}></Grid>
            </Fade>
          )}
        </Grid>
      </Container>
    </>
  );
}
