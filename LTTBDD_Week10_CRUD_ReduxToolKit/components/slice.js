import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch courses
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch('https://66fe07bc699369308956d365.mockapi.io/course');
  return await response.json();
});

// Add course
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

// Delete course
export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id) => {
  const response = await fetch(`https://66fe07bc699369308956d365.mockapi.io/course/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return id; // Return the id of the deleted course
  }
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        return state.filter(course => course.id !== action.payload);
      });
  },
});

// Xuất khẩu reducer
export default courseSlice.reducer;

// Xuất khẩu thunks chỉ một lần
// Xóa dòng xuất khẩu đã gây ra lỗi trước đó