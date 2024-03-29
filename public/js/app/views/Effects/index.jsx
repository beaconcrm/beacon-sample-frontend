import React, { useState } from 'react';
import { map } from 'lodash';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import confetti from 'utils/confetti';

import CardTitle from 'components/CardTitle';

const Effects = () => {

  const [colour, setColour] = useState('Red');

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleGoClick = () => {
    confetti(5000, colour);
  };

  const colours = ['Red', 'Black', 'Blue', 'Orange'];

  return (
    <Card>
      <CardContent>
        <CardTitle>
          Now lets fire off some confetti in different colours
        </CardTitle>

        <Typography variant="subtitle1">
          Choose the colour of your confetti and hit 'go'.
        </Typography>

        <br />

        <TextField
          value={colour}
          onChange={handleColourChange}
          fullWidth
          variant="outlined"
          select
        >
          {map(colours, colourOption => (
            <MenuItem
              key={colourOption}
              value={colourOption}
            >
              {colourOption}
            </MenuItem>
          ))}
        </TextField>

        <br />
        <br />

        <Button
          onClick={handleGoClick}
          variant="contained"
          color="primary"
        >
          Go
        </Button>

      </CardContent>
    </Card>
  );

};

export default Effects;
