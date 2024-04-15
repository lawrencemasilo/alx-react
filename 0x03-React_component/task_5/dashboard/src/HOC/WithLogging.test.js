import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  it('logs mount and unmount events for pure HTML element', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(() => <p>Hello</p>);
    const wrapper = mount(<WrappedComponent />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith('Component is mounted');
    expect(consoleSpy).toHaveBeenCalledWith('Component is going to unmount');
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount events for Login component', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const Login = () => <div>Login component</div>;
    Login.displayName = 'Login';
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    consoleSpy.mockRestore();
  });
});