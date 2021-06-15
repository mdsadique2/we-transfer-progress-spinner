import React from 'react';
import Demo from 'Pages/Demo';
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'Store/reducer'

const store = createStore(reducer);
configure({ adapter: new Adapter() });

it('renders Demo page component without crashing', () => {
  const wrapper = mount(<Provider store={store}><BrowserRouter><Demo/></BrowserRouter></Provider>)
  expect(wrapper.find(Demo).length).toBe(1);
});
