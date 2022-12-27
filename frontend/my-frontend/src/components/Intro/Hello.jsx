import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import ArticleIcon from "@mui/icons-material/Article";
import mePic from "../../static/pics/wide-green.jpg";

import defResume from "../../static/DeFrancisco_ResumeF22.pdf";
import { makeStyles, useTheme, Hidden, Avatar } from "@mui/material";

export default function Hello() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          textAlign: "center",
          alignItems: "center",
          borderRadius: "0px 0px 0px 15px",
          borderColor: "secondary.main",
          borderBottom: 1,
        }}>
        <Hidden mdDown>
          <br></br>
          <br></br>
        </Hidden>
        <Hidden mdUp>
          <br></br>
          <Avatar
            src={mePic}
            imgProps={{ backgroundPosition: "center" }}
            sx={{ height: "250px", width: "250px", ml: "auto", mr: "auto" }}
          />
          <br></br>
        </Hidden>
        <Grow in={true} timeout={250}>
          <Paper
            elevation={7}
            sx={{ ml: "10%", mr: "10%", borderRadius: 5, overflow: "scroll" }}>
            <br></br>
            <Typography
              variant='h1'
              component='p'
              sx={{
                fontFamily: "Roboto Condensed",
                fontSize: {
                  lg: 90,
                  md: 80,
                  sm: 60,
                  xs: 50,
                },
              }}>
              Sam DeFrancisco
            </Typography>
            <Typography
              variant='h4'
              color='secondary.light'
              sx={{
                fontFamily: "Roboto Condensed",
                fontSize: {
                  lg: 45,
                  md: 45,
                  sm: 35,
                  xs: 35,
                },
              }}>
              Software Engineer
            </Typography>
            <br></br>
          </Paper>
        </Grow>
        <Grow in={true} timeout={500}>
          <Stack
            direction='row'
            spacing={1}
            sx={{ mt: 4, mb: 2, justifyContent: "center" }}>
            <Link
              href='https://github.com/sjdefran1'
              target='_blank'
              rel='noreferrer'>
              <Button
                variant='contained'
                sx={{
                  ml: 1,
                  mr: 1,
                  fontFamily: "Roboto Condensed",
                }}>
                <GithubIcon color='action' sx={{ mr: 1 }} />
                Github!
              </Button>
            </Link>

            <Link
              href='https://www.linkedin.com/in/sam-defrancisco-4373361b3/'
              target='_blank'
              rel='noreferrer'>
              <Button
                variant='contained'
                color='secondary'
                sx={{
                  ml: 1,
                  fontFamily: "Roboto Condensed",
                }}>
                <LinkedInIcon color='action' sx={{ mr: 1 }} /> LinkedIn
              </Button>
            </Link>
          </Stack>
        </Grow>
        <Divider variant='middle' color='grey' sx={{ ml: "34%", mr: "34%" }} />

        <Grow in={true} timeout={650}>
          <Stack
            direction='column'
            spacing={1}
            sx={{
              mt: 1,
              mb: 2,
              display: "inline-block",
              fontFamily: "Roboto Condensed",
            }}>
            <Stack direction='row' spacing={1} sx={{ justifyContent: "left" }}>
              <EmailIcon />
              <Typography sx={{ fontFamily: "Roboto Condensed" }}>
                sjdefran@gmail.com
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1} sx={{ justifyContent: "left" }}>
              <PhoneIcon />
              <Typography sx={{ fontFamily: "Roboto Condensed" }}>
                (515)505-4146
              </Typography>
            </Stack>
            <br></br>
            <Link href={defResume} target='_blank' rel='noreferrer'>
              Resume PDF
            </Link>
          </Stack>
        </Grow>
      </Paper>
    </>
  );
}
