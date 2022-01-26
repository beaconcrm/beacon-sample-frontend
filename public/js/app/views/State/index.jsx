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
