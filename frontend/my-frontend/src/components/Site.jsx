import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import mePic from "../static/pics/steps-bw.jpg";
import pythonSVG from "../static/pics/python-5.svg";
import javaSvg from "../static/pics/javaSvg.svg";
import springbootSvg from "../static/pics/springboot.svg";
import djangoJPG from "../static/pics/django.jpg";
import chatJPG from "../static/pics/chatGPT.jpg";
import goSportsLogo from "../static/pics/blue_go_sports.png";
import cyRateLogo from "../static/pics/CyRate.png";
import reactSvg from "../static/pics/react.png";
import sjdSvg from "../static/pics/sjd.png";
import bootStrapSVG from "../static/pics/bootstrap.svg";
import teamSelectGIF from "../static/pics/team-select.gif";
import FeatureList from "./FeatureList.jsx";
import BulletText from "./bulletText.jsx";
import Box from "@mui/material/Box";
//import { projects } from "./portfolio";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "0",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//const project = projects[0];
export default function CoolCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title='This Site!'
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
            <IconButton aria-label='java'>
              <a target='_blank' rel='noreferrer' href='https://reactjs.org/'>
                <Avatar src={reactSvg} aria-label='java' />
              </a>
            </IconButton>
            <IconButton aria-label='springboot'>
              <a
                href='https://www.djangoproject.com/'
                target='_blank'
                rel='noreferrer'>
                <Avatar src={djangoJPG} aria-label='spring' sx={{}} />
              </a>
            </IconButton>
            <IconButton aria-label='springboot'>
              <a
                href='https://openai.com/blog/chatgpt/'
                target='_blank'
                rel='noreferrer'>
                <Avatar src={chatJPG} aria-label='spring' sx={{}} />
              </a>
            </IconButton>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
              This website was created with React, Django, and OpenAI's ChaptGPT
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
