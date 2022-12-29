import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import kinglandSvg from "../static/pics/kingland.svg";
import javaSvg from "../static/pics/javaSvg.svg";
import springSvg from "../static/pics/springboot.svg";

function WorkExperience({ company, jobTitle, description }) {
  return (
    <>
      <Card sx={{ maxWidth: "100%", borderRadius: 3, alignItems: "center" }}>
        <CardHeader
          avatar={
            <>
              <Avatar
                src={kinglandSvg}
                sx={{
                  width: 125,
                  height: 125,
                  position: "relative",
                  top: "50%",
                  transform: "translateY(25%)",
                }}
              />
            </>
          }
          title='Kingland Systems'
          subheader='Advanced Software Engineering Intern'
          sx={{ mt: 0 }}
        />

        <CardContent>
          <Divider textAlign='center' variant='fullWidth'>
            <Chip label='About' variant='outlined' color='primary' />
          </Divider>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
              Kingland Systems provides technology and outsourcing services for
              the financial sectors. Offers financial services, securities,
              entities and hierarchy master data management, account, trade
              processing, and regulatory compliance solutions
            </Typography>
          </Box>

          <Divider textAlign='center' variant='fullWidth'>
            <Chip label='Experience' variant='outlined' color='primary' />
          </Divider>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
              Interns at kingland are recognized as fulltime developers. We are
              immersed into a team and are expected to start clearing tickets
              right off the bat. Interns code is used within production. (Intern
              starting summer 2023)
            </Typography>
          </Box>
          <Divider textAlign='center' variant='fullWidth' />
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
                <Avatar
                  src={javaSvg}
                  aria-label='javalogo'
                  sx={{ height: 50, width: 50 }}
                />
              </a>
            </IconButton>
            <IconButton aria-label='spring'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://spring.io/projects/spring-boot'>
                <Avatar
                  src={springSvg}
                  aria-label='springLogo'
                  sx={{ height: 50, width: 50 }}
                />
              </a>
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default WorkExperience;
