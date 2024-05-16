import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('<Header />', () => {
  it('does not render logoutSection when user is not logged in', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const user = {
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logIn: () => {}, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut when logout link is clicked', () => {
    const user = {
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    };
    const logOut = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logIn: () => {}, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('span').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
