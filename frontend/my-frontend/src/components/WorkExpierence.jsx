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
import pythonSVG from "../static/pics/python-5.svg";
import awsSVG from "../static/aws.svg";


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
            As a Software Engineering Intern at Kingland Systems
            I was a full-time member of the Data Lakehouse team
            working on the Independence flagship solution. During 
            my tenure, I designed Extract Transform Load (ETL) scripts utilizing Python for
            initial loads and change data capture.  
            
            </Typography>

            <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
        
            Additionally, I collaborated closely with overseas team members to integrate new methods for
            complex ETL processes and conducted training sessions for the US team to ensure a
            smooth transition to the new processes. My role also involved
            active participation in daily standup meetings, sprint planning/retrospectives,
            and weekly checkpoints with the overseas team. Furthermore, I gained hands-on
            experience with various AWS services such as Glue, S3, DMS, RDS, 
            and Athena, providing valuable insights into cloud-based data management and analysis.
            </Typography>
          </Box>
          <Divider textAlign='center' variant='fullWidth' />
          <Stack
            direction='row'
            spacing={1}
            sx={{
              justifyContent: "center",
            }}>
            

            <IconButton aria-label='spring'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://spring.io/projects/spring-boot'>
                <Avatar
                  src={awsSVG}
                  aria-label='springLogo'
                  sx={{ height: 50, width: 50 }}
                />
              </a>
            </IconButton>

            <IconButton aria-label='ppy'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.python.org/'>
                <Avatar src={pythonSVG} aria-label='python' />
              </a>
            </IconButton>

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
