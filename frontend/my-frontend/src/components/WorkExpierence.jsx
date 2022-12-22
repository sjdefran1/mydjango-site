import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function WorkExperience({ company, jobTitle, description }) {
  return (
    <Card>
      <CardContent>
        <Typography>Work Experience</Typography>
        <Typography>{jobTitle}</Typography>
        <Typography>{company}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default WorkExperience;
