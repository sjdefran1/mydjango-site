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
} from "@mui/material";
import CoolCard from "./components/CoolCard.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
            <Container maxWidth='sm'>
              <CoolCard />
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
