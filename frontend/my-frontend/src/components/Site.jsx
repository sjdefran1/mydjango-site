import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import fastSVG from "../static/pics/fastapi.svg";
import chatJPG from "../static/pics/chatGPT.jpg";
import reactSvg from "../static/pics/react.png";
import sjdSvg from "../static/pics/sjd.png";
import Box from "@mui/material/Box";
import muiLogo from "../static/pics/mui.png";
//import { projects } from "./portfolio";

//const project = projects[0];
export default function CoolCard(props) {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: 3 }}>
      <CardHeader
        avatar={
          <>
            <Avatar
              src={sjdSvg}
              sx={{ width: 100, height: 100 }}
              aria-label='python'
            />
          </>
        }
        title='sjdefran.com'
        subheader='Full Stack Web App'
      />
      <Divider textAlign='center' variant='fullWidth'>
        <Chip label='Tech Stack' />
      </Divider>

      <CardContent>
        <>
          <Stack
            direction='row'
            spacing={1}
            sx={{
              justifyContent: "center",
            }}>
            <IconButton aria-label='react'>
              <a target='_blank' rel='noreferrer' href='https://reactjs.org/'>
                <Avatar src={reactSvg} aria-label='react logo' />
              </a>
            </IconButton>
            <IconButton aria-label='mui'>
              <a href='https://mui.com//' target='_blank' rel='noreferrer'>
                <Avatar src={muiLogo} aria-label='mui Logo' sx={{}} />
              </a>
            </IconButton>
            <IconButton aria-label='django'>
              <a
                href='https://fastapi.tiangolo.com/'
                target='_blank'
                rel='noreferrer'>
                <Avatar src={fastSVG} aria-label='django logo' sx={{}} />
              </a>
            </IconButton>
            <IconButton aria-label='chatGPT'>
              <a
                href='https://openai.com/blog/chatgpt/'
                target='_blank'
                rel='noreferrer'>
                <Avatar src={chatJPG} aria-label='chatGPT Logo' sx={{}} />
              </a>
            </IconButton>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
              This website was created w/ React on the frontend (Utilizing
              Material UI), deployed statically using Github Pages. FastAPI on
              the backend deployed using Deta, and some assistance from OpenAI's
              ChaptGPT
            </Typography>
          </Box>
        </>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Github Link'>
          <a
            href='https://github.com/sjdefran1/mydjango-site'
            target='_blank'
            rel='noreferrer'>
            <GitHubIcon color='action' />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
