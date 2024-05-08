// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { AppContext } from '../App/AppContext';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders correct number of NotificationItem components', () => {
    const mockListNotifications = [{ id: 1, type: 'default', value: 'Notification 1' }, { id: 2, type: 'urgent', value: 'Notification 2' }];
    const contextValue = { listNotifications: mockListNotifications, markNotificationAsRead: jest.fn() };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Notifications />
      </AppContext.Provider>
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });
});
