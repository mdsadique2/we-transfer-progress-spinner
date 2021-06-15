import React from 'react';
import Error404 from 'Pages/404';
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'Store/reducer'

const store = createStore(reducer);
configure({ adapter: new Adapter() });

it('renders Demo page component without crashing', () => {
  const wrapper = mount(<Provider store={store}><BrowserRouter><Error404/></BrowserRouter></Provider>)
  expect(wrapper.find(Error404).length).toBe(1);
});
