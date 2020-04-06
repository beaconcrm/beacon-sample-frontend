import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from './component';

const createConfirmation = (unmountDelay = 1000) => (props) => {
  const wrapper = document.body.appendChild(document.createElement('div'));

  // Pass down a `dispose` prop to enable the component to be removed fully after closing
  const dispose = () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(wrapper);
      setTimeout(() => wrapper.remove());
    }, unmountDelay);
  };

  ReactDOM.render(
    <Confirm
      dispose={dispose}
      {...props}
    />,
    wrapper,
  );

};

export default createConfirmation;
