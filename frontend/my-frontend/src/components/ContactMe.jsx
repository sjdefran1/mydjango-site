import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Chip } from "@mui/material";
import axios from "axios";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  submitMessageAxios = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8000/messages", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Box sx={{ "& > :not(style)": { m: 1, justifyContent: "center" } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id='input-with-sx'
            label='Full Name'
            variant='outlined'
            color='success'
            onChange={(event) => this.setState({ name: event.target.value })}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AlternateEmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id='input-with-sx'
            label='Email Address'
            variant='outlined'
            color='success'
            onChange={(event) => this.setState({ email: event.target.value })}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <MessageIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id='input-with-sx'
            label='Message'
            variant='outlined'
            color='success'
            onChange={(event) => this.setState({ message: event.target.value })}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Chip
            label='Submit'
            variant='outlined'
            color='success'
            onClick={this.submitMessageAxios}></Chip>
        </Box>
      </Box>
    );
  }
}

export default ContactMe;
