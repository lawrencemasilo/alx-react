import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('renders a form with disabled submit button by default', () => {
    const wrapper = shallow(<Login />);
    const form = wrapper.find('form');
    const submitButton = form.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables submit button when email and password fields are not empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
