import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('hides the Notifications div when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').hasClass('hidden')).toBe(true);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('displays the Notifications div when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').hasClass('hidden')).toBe(false);
  });

  it('should not rerender when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1', html: { __html: 'Notification 1' } },
      { id: 2, type: 'urgent', value: 'Notification 2', html: { __html: 'Notification 2' } },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ listNotifications });

    expect(wrapper).toMatchSnapshot();
  });

  it('should rerender when updating props with a longer list', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'Notification 1', html: { __html: 'Notification 1' } },
    ];
    const updatedListNotifications = [
      { id: 1, type: 'default', value: 'Notification 1', html: { __html: 'Notification 1' } },
      { id: 2, type: 'urgent', value: 'Notification 2', html: { __html: 'Notification 2' } },
    ];
    const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);
    
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ listNotifications: updatedListNotifications });

    expect(wrapper).toMatchSnapshot();
  });
});
