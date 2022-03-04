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
      console.log("runned");
      console.log("Payload: " + state);
      state.active = true;
    },
    getLinks: (state, action) => {
      console.log("i am running");
      state.links = [...action.payload];
      console.log(state.links);
    },
  },
});

// Action creators are generated for each case reducer function
export const { clickLink, getLinks } = navigationSlice.actions;

export default navigationSlice.reducer;
