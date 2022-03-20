import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  messageSent: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messageSent = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendMessage } = contactSlice.actions;

export const sendContactMessage = (message) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/contact", message);
      if (response.status === 200) dispatch(sendMessage());
      else throw new Error("Could not send message.");
    } catch (error) {
      console.error(error);
    }
  };
};

export default contactSlice.reducer;
