import React from 'react';
import RadialProgress from 'BasicComponents/RadialProgress';

import Adapter from "enzyme-adapter-react-16";
import { mount,shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

it('renders RadialProgress component without crashing', () => {
  const wrapper = shallow(<RadialProgress/>)
  expect(wrapper.find("svg").length).toBe(1);
});

it('should validate percent and display exact value if less than 100', async () => {
  let progress = 50
  const wrapper = mount(<RadialProgress currentProgress={progress}/>);
  wrapper.update();
  expect(wrapper.find("svg").length).toBe(1);
  expect(wrapper.find("span").length).toBe(2);
  expect(wrapper.find("span").at(0).text()).toBe(progress + '');
});


it('should validate percent before using and never exceed 100', async () => {
  let progress = 150
  const wrapper = mount(<RadialProgress currentProgress={progress}/>);
  wrapper.update();
  expect(wrapper.find("svg").length).toBe(1);
  expect(wrapper.find("span").length).toBe(2);
  expect(wrapper.find("span").at(0).text()).toBe('100');
});


it('should not spin the progress bar', async () => {
  let progress = 150
  const wrapper = mount(<RadialProgress currentProgress={progress} spinMode={false}/>);
  wrapper.update();
  expect(wrapper.find("svg").props().className).not.toContain('spin');
});