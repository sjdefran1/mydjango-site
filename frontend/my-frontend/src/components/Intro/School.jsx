import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import cyPNG from "../../static/pics/isuCy.png";
import Typography from "@mui/material/Typography";

export default function SlideFromContainer(props) {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(props.gridRef);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    //<div ref={containerRef}>
    <>
      <Slide direction='left' in={true} container={containerRef.current}>
        <Avatar
          src={cyPNG}
          alt='cy'
          sx={{
            marginTop: 2,
            ml: "auto",
            mr: "auto",
            height: 300,
            width: 300,
            border: 1,
            overflow: "visible",
            padding: 0,
          }}></Avatar>
      </Slide>

      <Slide direction='left' in={true} container={containerRef.current}>
        <Paper
          elevation={7}
          sx={{ ml: "15%", mr: "15%", borderRadius: 2, textAlign: "center" }}>
          <Typography
            variant='h4'
            sx={{
              marginTop: 2,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Iowa State University
          </Typography>
          <Typography
            variant='h5'
            color='secondary.light'
            sx={{
              marginTop: 1,
              mb: 2,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Junior
          </Typography>
        </Paper>
      </Slide>

      <Slide direction='left' in={true} container={containerRef.current}>
        <Paper
          elevation={7}
          sx={{ ml: "5%", mr: "5%", borderRadius: 2, textAlign: "center" }}>
          <Typography
            variant='h4'
            sx={{
              marginTop: 2,
              ml: "auto",
              mr: "auto",
              fontFamily: "Roboto Condensed",
            }}>
            Some Relevant Course Work
          </Typography>
          <Chip label='COMS309'></Chip>
        </Paper>
      </Slide>
    </>
    //</div>
  );
}
