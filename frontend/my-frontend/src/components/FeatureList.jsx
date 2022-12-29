import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function BasicList() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        marginLeft: 0,
      }}>
      <nav aria-label='main mailbox folders'>
        <List sx={{ alignText: "center" }}>
          <ListItem disablePadding></ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Drafts' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label='secondary mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Trash' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemText primary='Spam' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
