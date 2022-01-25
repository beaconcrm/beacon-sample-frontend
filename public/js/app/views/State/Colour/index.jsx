import React, { useState } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Colour = ({
  onChange,
}) => {

  const [colour, setColour] = useState('Red');

  const handleColourChange = (e) => {
    setColour(e.target.value);
    // Broadcast this change to the parent component
    onChange(colour);
  };

  const colours = ['Red', 'Black', 'Blue', 'Orange'];

  return (
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
  );

};

Colour.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Colour;
