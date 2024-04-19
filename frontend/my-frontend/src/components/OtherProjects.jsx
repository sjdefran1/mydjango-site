import React from "react";
import {
  Chip,
  Container,
  Paper,
  Grid,
  Typography,
  Divider,
  Avatar,
  IconButton,
  Stack,
  Box,
  Grow,
} from "@mui/material";
import pythonSVG from "../static/pics/python-5.svg";
import mySqlSvg from "../static/pics/mysql.png";
import alpacaSvg from "../static/pics/alpaca.png";
import unitySvg from "../static/pics/unity.png";
import cSvg from "../static/pics/csharp.png";
import javaSvg from "../static/pics/javaSvg.svg";

function OtherProjects() {
  return (
    <>
      <br></br>
      <Grow in={true} timeout={850}>
        <Container maxWidth="lg" sx={{ fontFamily: "Roboto Condensed" }}>
          <Paper elevation={1} sx={{ borderRadius: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Unity 2d Platformer
                </Typography>
                <Divider variant="middle"></Divider>
                <Grow in={true} timeout={1500}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <IconButton aria-label="charp">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                      >
                        <Avatar src={cSvg} aria-label="csharp" />
                      </a>
                    </IconButton>
                    <IconButton aria-label="unity">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://unity.com/"
                      >
                        <Avatar src={unitySvg} aria-label="unity" />
                      </a>
                    </IconButton>
                  </Stack>
                </Grow>

                <Typography
                  variant="body2"
                  paragraph
                  sx={{ ml: "3%", mr: "3%", my: 1 }}
                >
                  Multi-level platformer. Animated and designed whole project in
                  Adobe photoshop
                </Typography>
                <br></br>
                <Divider variant="middle">
                  <Chip variant="outlined" label="Features" color="info"></Chip>
                </Divider>
                <Grow in={true} timeout={1300}>
                  <Stack
                    direction="column"
                    sx={{ textAlign: "left", ml: 5, mb: 2 }}
                  >
                    <Typography variant="body2">- Teleporting doors</Typography>
                    <Typography variant="body2">- AI enemies</Typography>
                    <Typography variant="body2">- Character Animation Tree</Typography>
                  </Stack>
                </Grow>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Vader: Algo TradeBot
                </Typography>
                <Divider variant="middle"></Divider>
                <Grow in={true} timeout={1500}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <IconButton aria-label="ppy" size="small">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.python.org/"
                      >
                        <Avatar src={pythonSVG} aria-label="python" />
                      </a>
                    </IconButton>
                    <IconButton aria-label="mysql" size="medium">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.mysql.com/"
                      >
                        <Avatar src={mySqlSvg} aria-label="mysql" />
                      </a>
                    </IconButton>
                    <IconButton aria-label="alpaca" size="medium">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://alpaca.markets/"
                      >
                        <Avatar src={alpacaSvg} aria-label="alpacaAPI" />
                      </a>
                    </IconButton>
                  </Stack>
                </Grow>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ ml: "3%", mr: "3%", my: 1 }}
                >
                  Vader is an algobot that paper-trades on real time market
                  data. Translates popular stategy known as MACD
                </Typography>
                <Divider variant="middle">
                  <Chip variant="outlined" label="Features" color="info"></Chip>
                </Divider>
                <Grow in={true} timeout={1300}>
                  <Stack
                    direction="column"
                    sx={{ textAlign: "left", ml: 2, mb: 2 }}
                  >
                    <Typography variant="body2">- Uses Alpaca API</Typography>
                    <Typography variant="body2">- Wrote Scripts to backtest Strategy</Typography>
                    <Typography variant="body2">
                      - Optimized bot to trade on stocks that proved successful in
                      past against MACD
                    </Typography>
                    <Typography variant="body2">
                      - Uses Pandas, datetime, yFinance & more
                    </Typography>
                  </Stack>
                </Grow>
              </Grid>
              <Divider orientation="vertical" flexItem />

              <Grid item xs={12} md={3.95} sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Sorting Comparator
                </Typography>
                <Divider variant="middle"></Divider>
                <Grow in={true} timeout={1500}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <IconButton aria-label="java" size="small">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.java.com/en/"
                      >
                        <Avatar src={javaSvg} aria-label="java" />
                      </a>
                    </IconButton>
                  </Stack>
                </Grow>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ ml: "3%", mr: "3%", my: 1 }}
                >
                  Java OOP project. Uses popular sorting algorithms to sort
                  points given in (x,y) format
                </Typography>
                <br></br>
                <Divider variant="middle">
                  <Chip variant="outlined" label="Features" color="info"></Chip>
                </Divider>
                <Grow in={true} timeout={1300}>
                  <Stack
                    direction="column"
                    sx={{ textAlign: "left", ml: 2, mb: 2 }}
                  >
                    <Typography variant="body2">
                      - Implements quickSort, mergeSort, insertionSort, &
                      SelectionSort
                    </Typography>
                    <Typography variant="body2">
                      - Times each sort in same input data set
                    </Typography>
                    <Typography variant="body2">
                      - Compares and outputs runtime results
                    </Typography>
                  </Stack>
                </Grow>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grow>
    </>
  );
}

export default OtherProjects;
