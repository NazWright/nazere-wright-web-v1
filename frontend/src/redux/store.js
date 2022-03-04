import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./features/control/controlSlice";
import navigationReducer from "./features/navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
    navigation: navigationReducer,
  },
});
