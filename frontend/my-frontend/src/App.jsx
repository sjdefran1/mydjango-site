import React, { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectSection from "./sections/ProjectSection.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./sections/Intro.jsx";
import TopBar from "./components/nav/TopBar.jsx";
import KinglandCard from "./sections/KinglandSection.jsx";
import JobCard from "./components/JobCard.jsx";
import ContentHeader from "./components/nav/ContentHeader.jsx";
import dragonsSvg from "./static/pics/dragons2.jpg";
import amazonSvg from "./static/pics/amazon.svg";
import SkillSummary from "./components/SkillSummary.jsx";
// import CyRate from "./components/CyRate.jsx";
// import Site from "./components/Site.jsx";
import OtherProjects from "./components/projects/OtherProjects.jsx";
import ContactMe from "./sections/ContactMe.jsx";

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

  const desc1 = // eslint-disable-next-line
    "The responsibilities of Learning Ambassadors include training and onboarding new employees. \
    Explaining rules and policies for working at the site, \
    & answering questions and providing guidance to new associates. \
    I assisted and managed same day delivery crew with direct roles in the process, \
    such as picking and packing. On days where I wasn't needed for onboarding I continued to perform a variety of duties. \
    These responsibilities included transporting and staging deliveries, receiving trucks full of orders and preparing them for delivery,\
    working in different temperatures, building, wrapping, sorting, and transporting\
    pallets and packages. Used technology to sort, scan, and prepare orders.\
    In addition, I worked closely with delivery drivers to ensure low package \
    loss and correct routing of orders.";

  const desc2 =
    "Provide quality care for school-age youth during the school year and full-day child care on early dismissal days, no school days, school holidays/breaks, and full-day during the summer months.";

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
                        <KinglandCard />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <JobCard
                          company='Amazon Logistics'
                          jobTitle='Learning Ambassador'
                          description={desc1}
                          image={amazonSvg}
                          iy={100}
                          ix={100}
                        />
                        <br></br>
                        <JobCard
                          company='Johnston Community School District'
                          jobTitle='Childcare Provider'
                          description={desc2}
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
                    <ProjectSection />
                  </Container>
                </section>
                {/* <section id='contact'>
                  <ContentHeader name='Contact Me!' />
                  <Container maxWidth='md'>
                    <ContactMe />
                  </Container>
                </section>/ */}
              </div>
            </main>
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
