import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import javaSvg from "../static/pics/javaSvg.svg";
import springbootSvg from "../static/pics/springboot.svg";
import cyRateLogo from "../static/pics/cyrate2-1.png";
import BulletText from "./bulletText.jsx";
import Link from "@mui/material/Link";
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
              src={cyRateLogo}
              sx={{ width: 100, height: 100 }}
              aria-label='python'
            />
          </>
        }
        title='CyRate'
        subheader='Full Stack Android App'
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
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.java.com/en/'>
                <Avatar src={javaSvg} aria-label='java' />
              </a>
            </IconButton>
            <IconButton aria-label='springboot'>
              <a
                href='https://spring.io/projects/spring-boot'
                target='_blank'
                rel='noreferrer'>
                <Avatar src={springbootSvg} aria-label='spring' sx={{}} />
              </a>
            </IconButton>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
              Cyrate provides information on the best restaurants, bars, and
              activites around the city of Ames. Cyrate utilizes a springboot
              backend, a MySql Database, and a frontend that was created by
              teamates using android studio.
            </Typography>
          </Box>
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

        <Link
          href='https://www.youtube.com/watch?v=w_3M2IuUfWA&list=PL6BdlkdKLEB_pYmF7uwubfK99t4KT4Xoe&index=8&ab_channel=AlexOng'
          target='_blank'
          rel='noreferrer'
          underline='hover'
          sx={{ color: "secondary.light" }}>
          Demo Video
        </Link>

        <Typography
          variant='caption'
          color='theme.secondary'
          sx={{ marginLeft: "auto", color: "secondary.light" }}>
          More Features
        </Typography>
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
        <Divider variant='middle' />

        <CardContent>
          <>
            <Stack
              direction='column'
              spacing={0.5}
              sx={{
                justifyContent: "center",
              }}>
              <BulletText text='Multiple account types and privlleges (Owner, Admin, Guest, Normal)' />
              <BulletText text='View resturant/bar information (hours, locations w/ google maps API, menus)' />
              <BulletText text='Favorite feature for resturants, access your favorites by account' />
              <BulletText text='Leave reviews for different places, have access to all reviews you have left' />
              <BulletText text='Live comment threads utilizing websockets.' />
              <BulletText text='CRUD capabilities for all features' />
            </Stack>
            <br></br>
            <Typography variant='h6'>Teamates</Typography>
            <BulletText text='Anbu Krishnan, Alex Ong, Megan Eberle' />
          </>
        </CardContent>
      </Collapse>
    </Card>
  );
}
