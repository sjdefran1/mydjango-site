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
} from "@mui/material";
import pythonSVG from "../static/pics/python-5.svg";
import mySqlSvg from "../static/pics/mysql.png";
import alpacaSvg from "../static/pics/alpaca.png";
import unitySvg from "../static/pics/unity.png";
import cSvg from "../static/pics/csharp.png";
import BulletText from "./bulletText.jsx";

function OtherProjects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Chip
          variant='filled'
          color='secondary'
          label='Show More Projects'
          onClick={handleClick}
          sx={{ ml: "40%", mr: "43%", mt: 2 }}></Chip>
      </Container>
      {isVisible && (
        <>
          <br></br>
          <Container maxWidth='lg' sx={{ fontFamily: "Roboto Condensed" }}>
            <Paper elevation={1}>
              <Grid container spacing={1}>
                <Grid item xs={4} sx={{ textAlign: "center" }}>
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Unity 2d Platformer
                  </Typography>
                  <Divider variant='middle'></Divider>
                  <Stack
                    direction='row'
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                    }}>
                    <IconButton aria-label='ppy'>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.python.org/'>
                        <Avatar src={cSvg} aria-label='python' />
                      </a>
                    </IconButton>
                    <IconButton aria-label='ppy'>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.python.org/'>
                        <Avatar src={unitySvg} aria-label='python' />
                      </a>
                    </IconButton>
                  </Stack>
                  <Typography
                    variant='body2'
                    paragraph
                    sx={{ ml: "3%", mr: "3%", my: 1 }}>
                    Multi-level platformer. Animated and designed whole project
                    in Adobe photoshop
                  </Typography>
                  <Divider variant='middle'>
                    <Chip
                      variant='outlined'
                      label='Features'
                      color='info'></Chip>
                  </Divider>
                  <Box sx={{ textAlign: "left", ml: 5, mb: 2 }}>
                    <BulletText text='Teleporting doors' />
                    <BulletText text='AI enemies' />
                    <BulletText text='Character Animation Tree' />
                  </Box>
                </Grid>
                <Divider orientation='vertical' flexItem />
                <Grid item xs={4} sx={{ textAlign: "center" }}>
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Vader: Algo TradeBot
                  </Typography>
                  <Divider variant='middle'></Divider>
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
                    <IconButton aria-label='ppy' size='medium'>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.python.org/'>
                        <Avatar src={mySqlSvg} aria-label='python' />
                      </a>
                    </IconButton>
                    <IconButton aria-label='ppy' size='medium'>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.python.org/'>
                        <Avatar src={alpacaSvg} aria-label='python' />
                      </a>
                    </IconButton>
                  </Stack>
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
                  <Box sx={{ textAlign: "left", ml: 2, mb: 2 }}>
                    <BulletText text='Uses Alpaca API' />
                    <BulletText text='Wrote Scripts to backtest Stategy' />
                    <BulletText text='Optimized bot to trade on stocks that proved succesful in past against MACD' />
                    <BulletText text='Uses pandas, datetime, yFinance & more' />
                  </Box>
                </Grid>
                <Divider orientation='vertical' flexItem />

                <Grid item xs={3.95} sx={{ textAlign: "center" }}>
                  <Typography variant='h6' sx={{ mb: 1 }}>
                    Machine Code Decoder
                  </Typography>
                  <Divider variant='middle'></Divider>
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
                  </Stack>
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
                  <Box sx={{ textAlign: "left", ml: 2, mb: 2 }}>
                    <BulletText text='Uses Alpaca API' />
                    <BulletText text='Wrote Scripts to backtest Stategy' />
                    <BulletText text='Optimized bot to trade on stocks that proved succesful in past against MACD' />
                    <BulletText text='Uses pandas, datetime, yFinance & more' />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </>
      )}
    </>
  );
}

export default OtherProjects;
