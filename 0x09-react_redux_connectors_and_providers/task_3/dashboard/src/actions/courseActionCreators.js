import { selectCourse, unSelectCourse } from './courseActionCreators';

export const boundSelectCourse = (index) => selectCourse(index);
export const boundUnSelectCourse = (index) => unSelectCourse(index);

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index: index
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index: index
});
