import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext'; // Import AppContext

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('does not display contact link when user is logged out', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('displays contact link when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});