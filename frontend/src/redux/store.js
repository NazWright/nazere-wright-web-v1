import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./features/control/controlSlice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
  },
});
