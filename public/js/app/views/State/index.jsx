/*

This page has a slightly different component structure to the others.

1. There's something strange going on. The colours aren't updating with every click.
It's as if they're one click behind in a series of changes. Fix it!

2. Add another component called 'Velocity' which allows the user to change the start velocity.
  - Make sure only a sensible range of velocities can be entered
  - As well as this file you'll also need to update confetti.js in the utils folder.

3. Make the 'Go' button work so that confetti fires with the desired velocity and colour.


*/

import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import confetti from 'utils/confetti';

import CardTitle from 'components/CardTitle';

import Colour from './Colour';
import Go from './Go';

const State = () => {

  const [colour, setColour] = useState('Red');

  const handleColourChange = (newColour) => {
    setColour(newColour);
  };

  const handleGoClick = async () => {
    confetti(5000, colour);
  };

  return (
    <Card>
      <CardContent>
        <CardTitle>
          And now, we're going to set the colour and the velocity. Oh boy.
        </CardTitle>

        <Typography variant="subtitle1">
          Choose the colour and start velocity of your confetti and hit 'go'.
        </Typography>

        <br />

        <Colour
          onChange={handleColourChange}
        />

        <br />
        <br />

        <Go
          onGoClick={handleGoClick}
        />

      </CardContent>
    </Card>
  );

};

export default State;
