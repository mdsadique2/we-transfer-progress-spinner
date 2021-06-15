import React from 'react';
import ReactDOM from 'react-dom';
import FallbackLoading from 'Components/FallbackLoading';

it('renders FallbackLoading component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FallbackLoading />, div);
  expect(div.getElementsByClassName("fallback-container")).toBeTruthy()
});