import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  links: [],
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    clickLink: (state, action) => {
      state.active = true;
    },
    getLinks: (state, action) => {
      state.links = [...action.payload];
      console.log(state.links);
    },
  },
});

// Action creators are generated for each case reducer function
export const { clickLink, getLinks } = navigationSlice.actions;

export default navigationSlice.reducer;
