import * as React from "react";
import { Grid, Container, Chip, Hidden } from "@mui/material";

import PROJECTS_LIST from "../meta/Projects.js";
import ProjectCardV2 from "../components/projects/ProjectCardV2.jsx";
import OtherProjects from "../components/projects/OtherProjects.jsx";

console.log(PROJECTS_LIST);
export default function ProjectSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Container maxWidth='lg' xs={{ justifyContent: "center" }}>
        <Grid container spacing={2} xs={{ justifyContent: "center" }}>
          {PROJECTS_LIST.slice(0, 3).map((project, index) => (
            <Grid item key={index} xs={12} md={4}>
              <ProjectCardV2 project={project} index={index} />
            </Grid>
          ))}
        </Grid>

        <Hidden smDown>
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
        </Hidden>

        <Hidden smUp>
          {isVisible ? (
            <>
              <Container maxWidth='sm'>
                <Chip
                  variant='filled'
                  color='secondary'
                  label='Hide More Projects'
                  onClick={handleClick}
                  sx={{ ml: "32%", mr: "68%", mt: 2 }}></Chip>
              </Container>
            </>
          ) : (
            <Container maxWidth='sm'>
              <Chip
                variant='filled'
                color='secondary'
                label='Show More Projects'
                onClick={handleClick}
                sx={{ ml: "32%", mr: "68%", mt: 2 }}></Chip>
            </Container>
          )}
        </Hidden>
        {isVisible && (
          <>
            <Grid container spacing={2} my={1} ml={2}>
              {PROJECTS_LIST.slice(3, PROJECTS_LIST.length).map(
                (project, index) => (
                  <Grid
                    // justifyContent={"center"}
                    // display={"flex"}
                    item
                    key={index}>
                    <ProjectCardV2 project={project} index={index} />
                  </Grid>
                )
              )}
            </Grid>
            <OtherProjects />
          </>
        )}
        <br></br>
        <br></br>
      </Container>
    </>
  );
}
