// redux/courseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    setCourses: (state, action) => {
      return action.payload;
    },
    deleteCourse: (state, action) => {
      return state.filter(course => course.id !== action.payload);
    },
    addOrUpdateCourse: (state, action) => {
      const index = state.findIndex(course => course.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { setCourses, deleteCourse, addOrUpdateCourse } = courseSlice.actions;
export default courseSlice.reducer;