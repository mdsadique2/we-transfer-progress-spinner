import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'BasicComponents/Loader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader />, div);
  expect(div.getElementsByClassName("radial-progress-container")).toBeTruthy();
});