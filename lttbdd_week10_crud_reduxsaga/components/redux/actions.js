// actions.js
export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';

export const ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_COURSE_FAILURE = 'ADD_COURSE_FAILURE';

export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';

export const fetchCoursesRequest = () => ({ type: FETCH_COURSES_REQUEST });
export const fetchCoursesSuccess = (data) => ({ type: FETCH_COURSES_SUCCESS, payload: data });
export const fetchCoursesFailure = (error) => ({ type: FETCH_COURSES_FAILURE, payload: error });

export const deleteCourseRequest = (id) => ({ type: DELETE_COURSE_REQUEST, payload: id });
export const deleteCourseSuccess = (id) => ({ type: DELETE_COURSE_SUCCESS, payload: id });
export const deleteCourseFailure = (error) => ({ type: DELETE_COURSE_FAILURE, payload: error });

export const addCourseRequest = (course) => ({ type: ADD_COURSE_REQUEST, payload: course });
export const addCourseSuccess = (course) => ({ type: ADD_COURSE_SUCCESS, payload: course });
export const addCourseFailure = (error) => ({ type: ADD_COURSE_FAILURE, payload: error });

export const updateCourseRequest = (course) => ({ type: UPDATE_COURSE_REQUEST, payload: course });
export const updateCourseSuccess = (course) => ({ type: UPDATE_COURSE_SUCCESS, payload: course });
export const updateCourseFailure = (error) => ({ type: UPDATE_COURSE_FAILURE, payload: error });
