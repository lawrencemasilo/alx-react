import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" textSecondCell="Second Header" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data" textSecondCell="Value" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});
