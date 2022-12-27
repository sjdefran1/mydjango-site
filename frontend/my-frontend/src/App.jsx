import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectCard from "./components/ProjectCard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./components/Intro/Intro.jsx";
import TopBar from "./components/TopBar.jsx";
import WorkExperience from "./components/WorkExpierence.jsx";
import WorkExpierenceS from "./components/WorkExpeierenceS.jsx";
import ContentHeader from "./components/ContentHeader.jsx";
import dragonsSvg from "./static/pics/dragons2.jpg";
import amazonSvg from "./static/pics/amazon.svg";
import SkillSummary from "./components/SkillSummary.jsx";
import CyRate from "./components/CyRate.jsx";
import Site from "./components/Site.jsx";
import OtherProjects from "./components/OtherProjects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import { Route, Router } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#5c6bc0",
      light: "#9fa8da",
      dark: "#3949ab",
    },
    isu: {
      blue: "#183260",
      contrastText: "#fff",

      red: "#bf4d40",
      yellow: "#f4dd57",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const imgs = [
      "./static/pics/python-5.svg",
      "./static/pics/django.jpg",
      "./static/pics/blue_go_sports.png",
      "./static/pics/html5-2.svg",
      "./static/pics/bootstrap.svg",
      "./static/pics/isuCy.png",
      "./static/pics/wide-green.jpg",
      "./static/pics/dm.jpg",
    ];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {isLoading ? (
          <div></div>
        ) : (
          <>
            <TopBar />
            <main>
              <div>
                <Intro />
                <section id='work'>
                  <ContentHeader name='Work Experience' />
                  <Container maxWidth='xl'>
                    <Grid container spacing={3} wrap='wrap'>
                      <Grid item xs={12} md={6}>
                        <WorkExperience
                          company='ACME Inc.'
                          jobTitle='Software Engineer'
                          description='Worked on various projects including a project to build a new CRM system for the company.'
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <WorkExpierenceS
                          company='Amazon Logistics'
                          jobTitle='Learning Ambassador'
                          description='Managed same day packaage delivery crew'
                          image={amazonSvg}
                          iy={100}
                          ix={100}
                        />
                        <br></br>
                        <WorkExpierenceS
                          company='Johnston Community School District'
                          jobTitle='Childcare Provider'
                          description='Responsible for looking after group of kids.'
                          image={dragonsSvg}
                          iy={100}
                          ix={100}
                        />
                        <SkillSummary />
                      </Grid>
                    </Grid>
                  </Container>
                </section>
                <br></br>
                <section id='projects'>
                  <ContentHeader name='Projects' />
                  <Container maxWidth='lg' xs={{ justifyContent: "center" }}>
                    <Grid
                      container
                      spacing={2}
                      xs={{ justifyContent: "center" }}>
                      <Grid item xs={12} md={4}>
                        <ProjectCard />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <CyRate />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Site />
                      </Grid>
                      {isVisible ? (
                        <>
                          <Container maxWidth='sm'>
                            <Chip
                              variant='filled'
                              color='secondary'
                              label='Hide More Projects'
                              onClick={handleClick}
                              sx={{ ml: "45%", mr: "45%", mt: 2 }}></Chip>
                          </Container>
                        </>
                      ) : (
                        <Container maxWidth='sm'>
                          <Chip
                            variant='filled'
                            color='secondary'
                            label='Show More Projects'
                            onClick={handleClick}
                            sx={{ ml: "40%", mr: "43%", mt: 2 }}></Chip>
                        </Container>
                      )}
                    </Grid>
                    {isVisible && <OtherProjects />}
                    <br></br>
                    <br></br>
                  </Container>
                </section>
                <section id='contact'>
                  <ContentHeader name='Contact Me!' />
                  <Container maxWidth='md'>
                    <ContactMe />
                  </Container>
                </section>
              </div>
            </main>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
