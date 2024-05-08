import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse action creator returns correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: SELECT_COURSE,
    index: index
  };
  expect(selectCourse(index)).toEqual(expectedAction);
});

test('unSelectCourse action creator returns correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: UNSELECT_COURSE,
    index: index
  };
  expect(unSelectCourse(index)).toEqual(expectedAction);
});