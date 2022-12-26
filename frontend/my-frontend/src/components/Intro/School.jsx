import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import cyPNG from "../../static/pics/isuCy.png";
import Typography from "@mui/material/Typography";
export default function SlideFromContainer(props) {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(props.gridRef);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {/* <Paper elevation={2} sx={{ mt: 0 }}> */}
      <Grow direction='left' in={true} container={containerRef.current}>
        <Avatar
          src={cyPNG}
          alt='cy'
          imgProps={{ loading: "lazy" }}
          sx={{
            marginTop: 1,
            ml: "auto",
            mr: "auto",
            height: 300,
            width: 300,
            border: 1,
            overflow: "visible",
            padding: 0,
          }}></Avatar>
      </Grow>

      <Grow in={true} container={containerRef.current}>
        <Paper
          elevation={7}
          sx={{
            ml: "15%",
            mr: "15%",
            borderRadius: 2,
            textAlign: "center",
            minHeight: "10%",
          }}>
          <Typography
            variant='h3'
            sx={{
              marginTop: 2,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Iowa State University
          </Typography>
          <Typography
            variant='h4'
            color='secondary.light'
            sx={{
              marginTop: 0.5,
              mb: 2,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Graduating May 2024
          </Typography>
        </Paper>
      </Grow>

      <Grow direction='left' in={true} container={containerRef.current}>
        {/* Scroll when reszied */}
        <Paper
          elevation={7}
          sx={{
            ml: "5%",
            mr: "5%",
            maxHeight: "25%",
            maxWidth: "100%",
            borderRadius: 2,
            textAlign: "center",
            overflowY: "auto",
            overflowX: "auto",
          }}>
          <Typography
            variant='h4'
            sx={{
              marginTop: 1,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Some Relevant Course Work
          </Typography>
          <Grow in={true} timeout={1000} container={containerRef.current}>
            <Stack
              direction='row'
              spacing={2}
              sx={{ justifyContent: "center", mt: 1 }}>
              <Chip label='COMS227: OOP' color='primary'></Chip>
              <Chip
                label='COMS228: Datastructers & Algorithms'
                color='primary'></Chip>
            </Stack>
          </Grow>
          <Grow in={true} timeout={1300} container={containerRef.current}>
            <Stack
              direction='row'
              spacing={2}
              sx={{ justifyContent: "center", mt: 1 }}>
              <Chip label='COMS309: Android Development' color='info'></Chip>
              <Chip label='CPRE288: Embedded Programming' color='info'></Chip>
              <Chip label='COMS363: DBMS' color='info'></Chip>
            </Stack>
          </Grow>
          <Grow in={true} timeout={1600} container={containerRef.current}>
            <Stack
              direction='row'
              spacing={2}
              sx={{ justifyContent: "center", mt: 1, mb: 2 }}>
              <Chip label='COMS319: Web Development' color='secondary'></Chip>
              <Chip
                label='CPRE288: Embedded Programming'
                color='secondary'></Chip>
            </Stack>
          </Grow>
        </Paper>
      </Grow>
      {/* </Paper> */}
    </>
  );
}
