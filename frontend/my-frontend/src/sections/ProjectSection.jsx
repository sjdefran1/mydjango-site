import * as React from "react";
import {
  Grid,
  Container,
} from "@mui/material";

import PROJECTS_LIST from "../meta/Projects.js";
import ProjectCardV2 from "../components/projects/ProjectCardV2.jsx";

console.log(PROJECTS_LIST)
export default function ProjectSection() {
  return (
    <>
      <Container maxWidth="lg" xs={{ justifyContent: "center" }}>
        <Grid container spacing={2} xs={{ justifyContent: "center" }}>
          {PROJECTS_LIST.map((project, index) => (
            <Grid item key={index} xs={12} md={4}>
              <ProjectCardV2 project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
