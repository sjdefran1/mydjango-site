import * as React from "react";
import Avatar from "@mui/material/Avatar";
import cyPNG from "../../static/pics/isuCy.png";

export default function School() {
  return (
    <>
      <Avatar
        src={cyPNG}
        alt='cy'
        sx={{
          marginTop: 2,
          ml: "auto",
          mr: "auto",
          height: 200,
          width: 200,
          border: 1,
          overflow: "visible",
          padding: 0,
        }}></Avatar>
    </>
  );
}
