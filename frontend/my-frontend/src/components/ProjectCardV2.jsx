import * as React from "react";
import {
  Avatar,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Divider,
  IconButton,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProjectCardV2({ project, index }) {
  return (
    <>
      <Card sx={{ maxWidth: 500, borderRadius: 3 }}>
        {/* Project Profile Picture and Title */}
        <CardHeader
          avatar={
            <>
              <Avatar
                src={project.profile_img} // map
                sx={{ width: 100, height: 100 }}
                aria-label="Project Logo"
              />
            </>
          }
          title={project.title} // map
          subheader={project.subheader}
        />

        {/* Tech Stack, List of Images and links to homepages */}
        <Divider textAlign="center" variant="fullWidth">
          <Chip label="Tech Stack" />
        </Divider>

        <CardContent>
          <>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
              }}
            >
              {/* needs to be a map of icons needed */}
              {project.techstack_list.map((languageIcon, index) => {
                return (
                  <IconButton key={index} aria-label="ppy">
                    <a target="_blank" rel="noreferrer" href={languageIcon[1]}>
                      <Avatar
                        src={languageIcon[0]}
                        aria-label="programming-languageIcon"
                      />
                    </a>
                  </IconButton>
                );
              })}
            </Stack>
            <Box sx={{ textAlign: "center" }}>
              {/* Description of app */}
              <Typography variant="subtitle1" sx={{ marginY: 1 }} paragraph>
                {project.description}
              </Typography>
            </Box>
          </>
        </CardContent>

        {/* Github Icon and demo video centered */}
        {/* <Box sx={{ justifyContent: 'center' }}> */}
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
          <IconButton aria-label="Github Link">
            <a href={project.github} target="_blank" rel="noreferrer">
              <GitHubIcon color="action" />
            </a>
          </IconButton>
          {project.demoLink != "" && (
            <IconButton aria-label="Demo Link">
              <a href={project.github} target="_blank" rel="noreferrer">
                <YouTubeIcon color="action" />
              </a>
            </IconButton>
          )}
        </Stack>
        {/* </Box> */}

        {/* See more Features Drop Down, only render accordion if needed */}
        {project.bullets.length !== 0 && (
          <CardActions disableSpacing>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                See More Features
              </AccordionSummary>
              <AccordionDetails>
                <>
                  <Stack
                    direction="column"
                    spacing={0.5}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    {project.bullets.map((bulletText, index) => {
                      return (
                        <Typography variant="body2">
                          {"- " + bulletText}{" "}
                        </Typography>
                      );
                    })}
                  </Stack>
                  <br></br>
                  <Typography variant="h6">Teammates</Typography>
                  <Typography variant="body2">{project.teamates}</Typography>
                </>
              </AccordionDetails>
            </Accordion>
          </CardActions>
        )}
      </Card>
    </>
  );
}
