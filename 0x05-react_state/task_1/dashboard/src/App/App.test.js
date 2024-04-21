// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have default state for displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('should change displayDrawer state to true on handleDisplayDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('should change displayDrawer state to false on handleHideDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Setting displayDrawer to true
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
