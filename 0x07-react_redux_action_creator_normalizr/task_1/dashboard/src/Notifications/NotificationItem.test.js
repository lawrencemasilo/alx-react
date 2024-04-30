import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html when type and value props are passed', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toBe('test');
    expect(wrapper.prop('data-notification-type')).toBe('default');
  });

  it('renders the correct html when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toBe('<li data-notification-type="" dangerouslySetInnerHTML="[object Object]"></li>');
  });
});