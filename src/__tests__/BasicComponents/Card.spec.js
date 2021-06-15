import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'BasicComponents/Card';

it('renders Card component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  expect(div.getElementsByClassName("card")).toBeTruthy()
});