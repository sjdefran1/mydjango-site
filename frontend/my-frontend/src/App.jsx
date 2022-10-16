import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ProjectCard from "./components/ProjectCard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./components/Intro/Intro.jsx";
import TopBar from "./components/TopBar.jsx";

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
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <TopBar />
        <main>
          <div>
            <Intro />
            <Container maxWidth='md'>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ProjectCard />
                </Grid>
                <Grid item xs={6}>
                  <ProjectCard />
                </Grid>
              </Grid>
            </Container>
          </div>
          <br></br>
          <br></br>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
