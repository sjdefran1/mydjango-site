import * as React from "react";
import { NavHashLink } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import MobileNav from "./MobileNav.jsx";

export default function TitleBar() {
  return (
    <>
      <Hidden mdDown>
        <AppBar position='fixed' sx={{ opacity: "70%" }}>
          <Toolbar sx={{ justifyContent: "center" }}>
            <Typography variant='h6'>SJD</Typography>
            <NavHashLink smooth to='#intro'>
              <Button
                variant='text'
                sx={{ ml: 2, borderBottom: 2, borderColor: "secondary" }}>
                Intro
              </Button>
            </NavHashLink>

            <NavHashLink smooth to='#work'>
              <Button
                variant='text'
                sx={{ ml: 2, borderBottom: 2, borderColor: "secondary" }}>
                Work Experience
              </Button>
            </NavHashLink>

            <NavHashLink smooth to='#projects'>
              <Button
                variant='text'
                sx={{ ml: 2, borderBottom: 2, borderColor: "secondary" }}>
                Projects
              </Button>
            </NavHashLink>
            <NavHashLink smooth to='#contact'>
              <Button
                variant='text'
                sx={{ ml: 2, borderBottom: 2, borderColor: "secondary" }}>
                Contact Me!
              </Button>
            </NavHashLink>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Hidden>

      <Hidden mdUp>
        <MobileNav />
      </Hidden>
    </>
  );
}
