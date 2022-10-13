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
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mePic from "../static/pics/steps-bw.jpg";
import pythonSVG from "../static/pics/python-5.svg";
import djangoJPG from "../static/pics/django.jpg";
import goSportsLogo from "../static/pics/blue_go_sports.png";
import teamSelectGIF from "../static/pics/team-select.gif";
import FeatureList from "./FeatureList.jsx";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CoolCard() {
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
              src={goSportsLogo}
              sx={{ width: 100, height: 100 }}
              aria-label='python'
            />
          </>
        }
        title='GoSports'
        subheader='Full Stack Django Web App'
      />
      <Divider variant='middle' />

      <CardContent>
        <>
          <Typography variant='h6'>Features</Typography>
          <Typography variant='body2'>
            <ul>
              <li>View live scores of games going on today</li>
              <li>See current NBA standings</li>
              <li>
                Look at your favorite teams roster, as well as each players
                indivual stats that season
              </li>
              <li>
                View each active nba players career, also see common info about
                that player (height, weight, position, jersey #)
              </li>
            </ul>
          </Typography>
        </>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Github Link'>
          <a
            href='https://github.com/sjdefran1/GoSports'
            target='_blank'
            rel='noreferrer'>
            <GitHubIcon color='action' />
          </a>
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded}
        orientation='vertical'
        timeout='auto'
        unmountOnExit>
        <Divider textAlign='center' variant='fullWidth'>
          <Chip label='Tech Stack' />
        </Divider>
        <CardContent>
          <>
            <Stack direction='row' spacing={2}>
              <Avatar src={pythonSVG} aria-label='python' />

              <Avatar
                src={djangoJPG}
                aria-label='django'
                sx={{ marginLeft: 2 }}
              />
            </Stack>
          </>
        </CardContent>
        <Divider variant='middle' />
      </Collapse>
    </Card>
  );
}
