import * as React from "react";
import { useRef } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
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
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick = (nums) => {
    if (nums === 1) {
      setExpanded(!expanded);
      if (expanded) {
        //containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (nums === 2) {
      setExpanded2(!expanded2);
      if (expanded2) {
        //containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (nums === 3) {
      setExpanded3(!expanded3);
      if (expanded3) {
        //containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
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
        <Accordion
          onChange={() => handleExpandClick(1)}
          ref={containerRef}
          square
          TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Languages</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ overflowY: "auto", overflowX: "auto" }}>
            <Divider>
              <Chip label='Most Expierence' variant='outlined'></Chip>
            </Divider>
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>
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

        <Accordion
          onChange={() => handleExpandClick(2)}
          ref={containerRef}
          TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>Developer Tools</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ overflowY: "auto", overflowX: "auto" }}>
            <Divider inset sx={{ ml: "30%", mr: "30%" }}>
              <Chip
                label='Dev Tools'
                variant='outlined'
                color='success'
                sx={{ textAlign: "center" }}
              />
            </Divider>
            <br></br>
            <Grow in={expanded2} container={containerRef.current} timeout={750}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='Git' color='secondary' />
                <Chip label='CI/CD' color='info' />
                <Chip label='Postman' color='error' />
                <Chip label='MySQLWorkbench' color='secondary' />
                <Chip label='Linux' color='info' />
                <Chip label='LaTeX' color='success' />
              </Stack>
            </Grow>
            <br></br>
            <Divider inset sx={{ ml: "30%", mr: "30%" }}>
              <Chip
                label="IDE's"
                variant='outlined'
                color='success'
                sx={{ textAlign: "center" }}
              />
            </Divider>
            <br></br>
            <Grow in={expanded2} container={containerRef.current} timeout={750}>
              <Stack
                spacing={1}
                direction='row'
                sx={{ justifyContent: "center", mx: "auto", my: 1 }}>
                <Chip label='VScode' color='secondary' />
                <Chip label='Eclipse' color='info' />
                <Chip label='Spyder3' color='error' />
                <Chip label='Verilog' color='secondary' />
              </Stack>
            </Grow>
          </AccordionDetails>
        </Accordion>
        <Accordion TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>Other Skills/Hobies</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ overflowY: "auto", overflowX: "auto" }}>
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
