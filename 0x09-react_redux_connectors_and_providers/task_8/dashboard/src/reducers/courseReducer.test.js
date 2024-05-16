import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(
      fromJS({
        courses: {},
      })
    );
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    expect(courseReducer(undefined, action)).toEqual(
      fromJS({
        courses: {
          1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
          2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
          3: { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      })
    );
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });
    const action = { type: SELECT_COURSE, index: 2 };
    expect(courseReducer(initialState, action)).toEqual(
      fromJS({
        courses: {
          1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
          2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
          3: { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      })
    );
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });
    const action = { type: UNSELECT_COURSE, index: 2 };
    expect(courseReducer(initialState, action)).toEqual(
      fromJS({
        courses: {
          1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
          2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
          3: { id: 3, name: 'React', credit: 40, isSelected: false },
        },
      })
    );
  });
});
