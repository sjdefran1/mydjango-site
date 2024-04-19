import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import beachCliff from "../../static/collage/beachCliff.JPG";
import beachColor from "../../static/collage/beachColor.JPG";
import campanileMe from "../../static/collage/campanileMe.JPG";
import chrysler from "../../static/collage/chrysler.JPG";
import daboys from "../../static/collage/daboys.JPG";
import dewtour from "../../static/collage/dewtour.JPG";
import drawing1 from "../../static/collage/drawing1.JPG";
// import kitts from "../../static/collage/kitts.JPG";
// import kittSelfie from "../../static/collage/kittsSelfie.JPG";
import mj from "../../static/collage/mj.JPG";
import partySt from "../../static/collage/partySt.JPG";
import sk8 from "../../static/collage/sk8.PNG";
import curvy from "../../static/collage/curvy.jpg";
import trees from "../../static/collage/trees.jpg";
import studentSection from "../../static/collage/studentSection.jpg";
import samKyle from "../../static/pics/samISU2.jpg";

export default function MasonryImageList() {
  return (
    <Box sx={{ width: "100%", height: "60%", overflowY: "scroll" }}>
      <ImageList variant='masonry' cols={3} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: beachColor,
    title: "SanDiego",
  },
  {
    img: partySt,
    title: "BourbonStreet",
  },
  {
    img: campanileMe,
    title: "CampanileVisit",
  },
  {
    img: daboys,
    title: "Friends",
  },
  {
    img: chrysler,
    title: "CampanileTree",
  },
  {
    img: curvy,
    title: "SanFran",
  },
  {
    img: trees,
    title: "SanFranTrees",
  },
  {
    img: studentSection,
    title: "ISUgame",
  },
  {
    img: beachCliff,
    title: "sanDiego",
  },
  {
    img: drawing1,
    title: "mountainDrawing",
  },
  {
    img: samKyle,
    title: "ISUbench",
  },
  {
    img: mj,
    title: "mjDrawing",
  },

  {
    img: sk8,
    title: "skateboarding",
  },
  {
    img: dewtour,
    title: "dewtour",
  },
];
