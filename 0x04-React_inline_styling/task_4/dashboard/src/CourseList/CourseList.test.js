import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});
