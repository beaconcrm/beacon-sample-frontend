/*
* Use the react number format component library to export an input that:
* 1) only allows numbers in a valid currency format
* 2) adds thousand separators
* 3) has max 2.d.p
*
* Also, usefully, it can't have any non numeric things added, which is handy
*
* Used inside filters and editable entity field value for*
* number/currency/percent inputs
*/
import { omit } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';


const NumberInput = (props) => {
  const { inputRef, onChange, decimalScale } = props;
  const other = omit(props, ['inputRef', 'onChange', 'decimalScale']);

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      decimalScale={decimalScale}
    />
  );
};

NumberInput.defaultProps = {
  decimalScale: 0,
};

NumberInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  decimalScale: PropTypes.number,
};

export default NumberInput;
