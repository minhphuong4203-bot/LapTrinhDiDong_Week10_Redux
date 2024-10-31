// reducer.js
import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
} from './actions';

const initialState = {
  courses: [],
  loading: false, // Chỉ sử dụng để tải khóa học
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case FETCH_COURSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload),
      };
    case DELETE_COURSE_FAILURE:
      return { ...state, error: action.payload }; // Giữ lại lỗi nếu có
    default:
      return state;
  }
};

export default courseReducer;