import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloseIcon from "@mui/icons-material/Close";

import { Chip, Alert, Collapse, IconButton } from "@mui/material";
import axios from "axios";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showAlert: false,
      alertMessage: "",
      open: false,
    };
  }

  submitMessageAxios = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(this.state);
    axios
      .post("https://uctedx.deta.dev/messages", data)
      .then((response) => {
        console.log(response);
        this.setState({
          showAlert: true,
          alertMessage: "Message Received!",
          open: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Box sx={{ "& > :not(style)": { m: 1, justifyContent: "center" } }}>
        {this.state.showAlert && (
          <Collapse in={this.state.open}>
            <Alert
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    this.setState({ open: false });
                  }}>
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2, textAlign: "center" }}>
              Message Sent! I'll get back to you ASAP.
            </Alert>
          </Collapse>
        )}
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 1.5 }} />
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
          <AlternateEmailIcon sx={{ color: "action.active", mr: 1, my: 1.5 }} />
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
          <MessageIcon sx={{ color: "action.active", mr: 1, my: 1.5 }} />
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
