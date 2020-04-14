import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Alert from '@material-ui/lab/Alert';

import CardTitle from 'components/CardTitle';


class SendMessage extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  async handleSendClick() {
    const { message } = this.state;

    await axios({
      method: 'post',
      url: '/slack/send_message',
      data: {
        message,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }

  render() {
    const { message } = this.state;

    return (
      <Card>
        <CardContent>
          <CardTitle>
            Send a Slack message
          </CardTitle>

          <Typography variant="subtitle1">
            Type your message in the input below, and then click send.
          </Typography>

          <br />

          {/*
          <div>
            <Alert severity="success">
              Message sent
            </Alert>
            <br />
          </div>
          */}

          <TextField
            variant="outlined"
            label="Message to send"
            value={message}
            onChange={this.handleMessageChange}
            fullWidth
          />

          <br />
          <br />

          <Button
            onClick={this.handleSendClick}
            variant="contained"
            color="primary"
          >
            Send
          </Button>

        </CardContent>
      </Card>
    );
  }

}

export default SendMessage;
