import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mePic from "../static/pics/wide-green.jpg";
import meVanc from "../static/pics/meVanc.jpg"
import dmPic from "../static/pics/dm.jpg";
import Hello from "../components/Intro/Hello.jsx";
import School from "../components/Intro/School.jsx";
import "./Intro.css";
import ImageCollage from "../components/Intro/ImageCollage.jsx";
import Hidden from "@mui/material/Hidden";

export default function Intro() {
  const [value, setValue] = React.useState("one");
  const gridRef = React.useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section id='intro'>
        <Container maxWidth='xl' sx={{ mt: 3, mb: 4 }}>
          <Grid container spacing={0} sx={{ minHeight: "75%" }}>
            <Grid item xs={12} md={6} ref={gridRef} sx={{ paddingTop: "0px" }}>
              <Paper
                elevation={24}
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
                    <Tab
                      value='one'
                      label='Intro'
                      sx={{ fontFamily: "Roboto Condensed" }}
                    />
                    <Tab
                      value='two'
                      label='School'
                      sx={{ fontFamily: "Roboto Condensed" }}
                    />
                    <Tab
                      value='three'
                      label='Photos'
                      sx={{ fontFamily: "Roboto Condensed" }}
                    />
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
              <Hidden mdDown>
                <Fade in={true} timeout={1000}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      borderRadius: "0px 15px 15px 15px",
                      backgroundImage: `url(${mePic})`,
                      backgroundPosition: "center",
                      minHeight: { lg: 800, md: 800, sm: 500, xs: 500 },
                      maxHeight: "100%",
                    }}></Grid>
                </Fade>
              </Hidden>
            )}

            {value === "two" && (
              <Hidden mdDown>
                <Fade in={true} timeout={1000}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      borderRadius: "0px 15px 15px 15px",
                      backgroundImage: `url(${dmPic})`,
                      backgroundPosition: "center",
                      minHeight: 800,
                      maxHeight: "100%",
                    }}></Grid>
                </Fade>
              </Hidden>
            )}
          </Grid>
          {value === "three" && <ImageCollage />}
        </Container>
      </section>
    </>
  );
}
