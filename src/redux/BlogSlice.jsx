import { createSlice } from '@reduxjs/toolkit';

export const BlogSlice=createSlice({
  name:"blogs",
  initialState:[],
  reducers:{
    saveAllBlogs : (state,action) => {
      console.log(state);
      return action.payload
  }
  }
})

export default BlogSlice.reducer;