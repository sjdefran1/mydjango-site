import React, { useState } from "react";
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
import BulletText from "./bulletText.jsx";
import javaSvg from "../static/pics/javaSvg.svg";

function OtherProjects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible ? (
        <>
          <Container maxWidth='sm'>
            <Chip
              variant='filled'
              color='secondary'
              label='Hide More Projects'
              onClick={handleClick}
              sx={{ ml: "40%", mr: "43%", mt: 2 }}></Chip>
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

      {isVisible && (
        <>
          <br></br>
          <Grow in={true} timeout={850}>
            <Container maxWidth='lg' sx={{ fontFamily: "Roboto Condensed" }}>
              <Paper elevation={1} sx={{ borderRadius: 2 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                    <Typography variant='h6' sx={{ mb: 1 }}>
                      Unity 2d Platformer
                    </Typography>
                    <Divider variant='middle'></Divider>
                    <Grow in={true} timeout={1500}>
                      <Stack
                        direction='row'
                        spacing={1}
                        sx={{
                          justifyContent: "center",
                        }}>
                        <IconButton aria-label='charp'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://learn.microsoft.com/en-us/dotnet/csharp/'>
                            <Avatar src={cSvg} aria-label='csharp' />
                          </a>
                        </IconButton>
                        <IconButton aria-label='unity'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://unity.com/'>
                            <Avatar src={unitySvg} aria-label='unity' />
                          </a>
                        </IconButton>
                      </Stack>
                    </Grow>

                    <Typography
                      variant='body2'
                      paragraph
                      sx={{ ml: "3%", mr: "3%", my: 1 }}>
                      Multi-level platformer. Animated and designed whole
                      project in Adobe photoshop
                    </Typography>
                    <br></br>
                    <Divider variant='middle'>
                      <Chip
                        variant='outlined'
                        label='Features'
                        color='info'></Chip>
                    </Divider>
                    <Grow in={true} timeout={1300}>
                      <Box sx={{ textAlign: "left", ml: 5, mb: 2 }}>
                        <BulletText text='Teleporting doors' />
                        <BulletText text='AI enemies' />
                        <BulletText text='Character Animation Tree' />
                      </Box>
                    </Grow>
                  </Grid>
                  <Divider orientation='vertical' flexItem />
                  <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                    <Typography variant='h6' sx={{ mb: 1 }}>
                      Vader: Algo TradeBot
                    </Typography>
                    <Divider variant='middle'></Divider>
                    <Grow in={true} timeout={1500}>
                      <Stack
                        direction='row'
                        spacing={1}
                        sx={{
                          justifyContent: "center",
                        }}>
                        <IconButton aria-label='ppy' size='small'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.python.org/'>
                            <Avatar src={pythonSVG} aria-label='python' />
                          </a>
                        </IconButton>
                        <IconButton aria-label='mysql' size='medium'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.mysql.com/'>
                            <Avatar src={mySqlSvg} aria-label='mysql' />
                          </a>
                        </IconButton>
                        <IconButton aria-label='alpaca' size='medium'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://alpaca.markets/'>
                            <Avatar src={alpacaSvg} aria-label='alpacaAPI' />
                          </a>
                        </IconButton>
                      </Stack>
                    </Grow>
                    <Typography
                      variant='body2'
                      paragraph
                      sx={{ ml: "3%", mr: "3%", my: 1 }}>
                      Vader is an algobot that paper-trades on real time market
                      data. Translates popular stategy known as MACD
                    </Typography>
                    <Divider variant='middle'>
                      <Chip
                        variant='outlined'
                        label='Features'
                        color='info'></Chip>
                    </Divider>
                    <Grow in={true} timeout={1300}>
                      <Box sx={{ textAlign: "left", ml: 2, mb: 2 }}>
                        <BulletText text='Uses Alpaca API' />
                        <BulletText text='Wrote Scripts to backtest Stategy' />
                        <BulletText text='Optimized bot to trade on stocks that proved succesful in past against MACD' />
                        <BulletText text='Uses pandas, datetime, yFinance & more' />
                      </Box>
                    </Grow>
                  </Grid>
                  <Divider orientation='vertical' flexItem />

                  <Grid item xs={12} md={3.95} sx={{ textAlign: "center" }}>
                    <Typography variant='h6' sx={{ mb: 1 }}>
                      Sorting Comparator
                    </Typography>
                    <Divider variant='middle'></Divider>
                    <Grow in={true} timeout={1500}>
                      <Stack
                        direction='row'
                        spacing={1}
                        sx={{
                          justifyContent: "center",
                        }}>
                        <IconButton aria-label='java' size='small'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.java.com/en/'>
                            <Avatar src={javaSvg} aria-label='java' />
                          </a>
                        </IconButton>
                      </Stack>
                    </Grow>
                    <Typography
                      variant='body2'
                      paragraph
                      sx={{ ml: "3%", mr: "3%", my: 1 }}>
                      Java OOP project. Uses popular sorting algorithms to sort
                      points given in (x,y) format
                    </Typography>
                    <br></br>
                    <Divider variant='middle'>
                      <Chip
                        variant='outlined'
                        label='Features'
                        color='info'></Chip>
                    </Divider>
                    <Grow in={true} timeout={1300}>
                      <Box sx={{ textAlign: "left", ml: 2, mb: 2 }}>
                        <BulletText text='Implements  quickSort, mergeSort, insertionSort, & SelectionSort' />
                        <BulletText text='Times each sort in same input data set' />
                        <BulletText text='Compares and outputs runtime results' />
                      </Box>
                    </Grow>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </Grow>
        </>
      )}
    </>
  );
}

export default OtherProjects;
