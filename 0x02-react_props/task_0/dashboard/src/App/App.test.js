import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
