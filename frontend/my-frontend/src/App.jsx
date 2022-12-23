import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectCard from "./components/ProjectCard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./components/Intro/Intro.jsx";
import TopBar from "./components/TopBar.jsx";
import Projects from "./components/Projects.jsx";
import WorkExperience from "./components/WorkExpierence.jsx";
import WorkExpierenceS from "./components/WorkExpeierenceS.jsx";
import ContentHeader from "./components/ContentHeader.jsx";
import dragonsSvg from "./static/pics/dragons2.jpg";
import amazonSvg from "./static/pics/amazon.svg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#5c6bc0",
      light: "#9fa8da",
      dark: "#3949ab",
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
                <ContentHeader name='Projects' />
                <Container maxWidth='md'>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <ProjectCard />
                    </Grid>
                    <Grid item xs={6}>
                      <ProjectCard />
                    </Grid>
                  </Grid>
                  <br></br>
                  <br></br>
                </Container>
                <ContentHeader name='Work Expierence' />
                <Container maxWidth='xl'>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <WorkExperience
                        company='ACME Inc.'
                        jobTitle='Software Engineer'
                        description='Worked on various projects including a project to build a new CRM system for the company.'
                      />
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                  </Grid>
                </Container>
                <br></br>
              </div>
            </main>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
