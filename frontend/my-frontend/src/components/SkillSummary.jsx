import * as React from "react";
import { useRef } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {
  Divider,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SkillSummary() {
  const containerRef = useRef(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (expanded) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Paper elevation={1} sx={{ my: 2, borderRadius: 2 }}>
        <Divider>
          <Typography
            variant='h4'
            sx={{ fontFamily: "Roboto Condensed", color: "secondary.light" }}>
            Summary of Skills
          </Typography>
        </Divider>
        <Accordion onChange={handleExpandClick} ref={containerRef}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider>
              <Chip label='Most Expierence' variant='outlined'></Chip>
            </Divider>
            <Grow in={expanded} container={containerRef.current} timeout={750}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='Python' color='info' />
                <Chip label='Java' color='error' />
                <Chip label='SQL' color='primary' />
                <Chip label='HTML & CSS' color='secondary' />
              </Stack>
            </Grow>
            <br></br>
            <Divider inset sx={{ ml: "30%", mr: "30%" }}>
              <Chip
                label='Frame Works'
                variant='outlined'
                color='success'
                sx={{ textAlign: "center" }}
              />
            </Divider>
            <Grow in={expanded} container={containerRef.current} timeout={950}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='SpringBoot' />
                <Chip label='Hiberante/JDBC' />
                <Chip label='Django' />
                <Chip label='SQLAlchemy' />
              </Stack>
            </Grow>
            <br></br>
            <Divider>
              <Chip label='Less Expierence' variant='outlined'></Chip>
            </Divider>
            <Grow in={expanded} container={containerRef.current} timeout={750}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='C' color='secondary' />
                <Chip label='C#' color='info' />
                <Chip label='JavaScript' color='error' />
                <Chip label='Verilog' color='secondary' />
              </Stack>
            </Grow>
            <br></br>

            <Divider inset sx={{ ml: "30%", mr: "30%" }}>
              <Chip
                label='Frame Works'
                variant='outlined'
                color='success'
                sx={{ textAlign: "center" }}
              />
            </Divider>

            <Grow in={expanded} container={containerRef.current} timeout={950}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='React' />
                <Chip label='FastAPI' />
              </Stack>
            </Grow>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>Developer Tools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>Other Skills/Hobies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* <IconButton></IconButton>
        <Avatar src="/path/to/image.jpg" />
        </IconButton>
        <IconButton>
          <Avatar src="/path/to/image.jpg" />
        </IconButton>
        <IconButton>
          <Avatar src="/path/to/image.jpg" />
        </IconButton> */}
      </Paper>
    </>
  );
}

export default SkillSummary;
