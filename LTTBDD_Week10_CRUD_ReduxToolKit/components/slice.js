// slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch('https://66fe07bc699369308956d365.mockapi.io/course');
  return await response.json();
});

export const addCourse = createAsyncThunk('courses/addCourse', async (title) => {
  const response = await fetch('https://66fe07bc699369308956d365.mockapi.io/course', {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    deleteCourse: (state, action) => {
      return state.filter(course => course.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

// Exporting the actions and reducer
export const { deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;