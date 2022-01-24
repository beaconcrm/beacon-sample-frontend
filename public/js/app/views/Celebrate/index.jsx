import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import confetti from 'utils/confetti';
// import Alert from '@material-ui/lab/Alert';

import CardTitle from 'components/CardTitle';


class Celebrate extends Component {

  constructor() {
    super();

    this.state = {
      duration: '',
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  handleMessageChange(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  async handleSendClick() {
    const { duration } = this.state;
    confetti(duration);
  }

  render() {
    const { duration } = this.state;

    return (
      <Card>
        <CardContent>
          <CardTitle>
            Fire off some confetti
          </CardTitle>

          <Typography variant="subtitle1">
            Choose how long you want to celebrate for and hit 'go'.
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
            value={duration}
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
            Go
          </Button>

        </CardContent>
      </Card>
    );
  }

}

export default Celebrate;
