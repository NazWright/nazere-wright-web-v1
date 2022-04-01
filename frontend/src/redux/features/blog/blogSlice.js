import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  selectedArticleId: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state, action) => {
      state.articles = action.payload;
    },
    selectArticle: (state, action) => {
      state.selectedArticleId = action.payload;
    },
  },
});

export const { getBlogs, selectArticle } = blogSlice.actions;

// asynchronous thunk which will fetch our projects
export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      // fetch from the api backend
      const response = await axios.get("/api/blog");
      console.log(response.data);
      dispatch(getBlogs(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default blogSlice.reducer;
