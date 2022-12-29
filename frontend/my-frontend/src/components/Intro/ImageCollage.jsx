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
import kitts from "../../static/collage/kitts.JPG";
import kittSelfie from "../../static/collage/kittsSelfie.JPG";
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
    title: "Books",
  },
  {
    img: partySt,
    title: "Coffee table",
  },
  {
    img: campanileMe,
    title: "Sink",
  },
  {
    img: daboys,
    title: "Chairs",
  },
  {
    img: chrysler,
    title: "Kitchen",
  },
  {
    img: curvy,
    title: "Laptop",
  },
  {
    img: trees,
    title: "Laptop",
  },
  {
    img: studentSection,
    title: "Laptop",
  },

  {
    img: kitts,
    title: "Coffee",
  },
  {
    img: beachCliff,
    title: "Bed",
  },
  {
    img: drawing1,
    title: "Doors",
  },
  {
    img: samKyle,
    title: "Doors",
  },
  {
    img: mj,
    title: "Blinds",
  },

  {
    img: kittSelfie,
    title: "Storage",
  },
  {
    img: sk8,
    title: "Candle",
  },
  {
    img: dewtour,
    title: "Laptop",
  },
];
