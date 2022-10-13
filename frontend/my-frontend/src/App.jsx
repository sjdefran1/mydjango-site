import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Container,
  Avatar,
  CssBaseline,
  Paper,
} from "@mui/material";
import ProjectCard from "./components/ProjectCard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Intro from "./components/Intro.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    caption: {},
  },
});
const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6'>My test Site</Typography>
          </Toolbar>
        </AppBar>
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
