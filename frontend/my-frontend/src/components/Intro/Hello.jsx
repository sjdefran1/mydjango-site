import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Hello() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          textAlign: "center",
          borderRadius: "0px 0px 0px 15px",
        }}>
        <br></br>
        <Typography variant='h1'>Sam DeFrancisco</Typography>
        <Typography variant='h4' color='secondary.dark'>
          Software Engineer
        </Typography>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            mt: 5,
            mb: 2,
          }}>
          <GithubIcon />
          <Button
            variant='contained'
            color='secondary'
            sx={{
              ml: 1,
              mr: 1,
            }}>
            Github!
          </Button>
          <LinkedInIcon sx={{ ml: 2 }} />
          <Button
            variant='contained'
            color='secondary'
            sx={{
              ml: 1,
            }}>
            LinkedIn
          </Button>
        </Box>
      </Paper>
    </>
  );
}
