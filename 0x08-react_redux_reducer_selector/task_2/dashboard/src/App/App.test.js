import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('marks notification as read correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const mockListNotifications = [{ id: 1, text: 'Notification 1' }, { id: 2, text: 'Notification 2' }];
    wrapper.setState({ listNotifications: mockListNotifications });

    instance.markNotificationAsRead(1);
    
    expect(wrapper.state('listNotifications')).toHaveLength(1);
    expect(wrapper.state('listNotifications')).toEqual(expect.not.arrayContaining([{ id: 1, text: 'Notification 1' }]));
  });
});
