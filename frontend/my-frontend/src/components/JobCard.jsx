import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

function JobCard({ company, jobTitle, description, image, iy, ix }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          borderRadius: 3,
          textAlign: "center",
          justifyContent: "center",
        }}>
        <CardHeader
          avatar={
            <>
              <Avatar
                src={image}
                sx={{
                  width: { ix },
                  height: { iy },
                }}
              />
            </>
          }
          title={company}
          subheader={jobTitle}
          sx={{ mt: 0 }}
        />
        <Divider textAlign='center' variant='fullWidth'></Divider>
        <CardActions disableSpacing>
          <Typography
            variant='caption'
            color='theme.secondary'
            sx={{ marginLeft: "auto", color: "secondary.light" }}>
            Learn About My Non-Software Role
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
          <CardContent>
            <>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant='subtitle1' sx={{ marginY: 1 }} paragraph>
                  {description}
                </Typography>
              </Box>
            </>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default JobCard;
