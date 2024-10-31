// courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Định nghĩa async thunk để lấy dữ liệu từ API
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch('https://66fe07bc699369308956d365.mockapi.io/course');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
});

// Tạo slice
const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;