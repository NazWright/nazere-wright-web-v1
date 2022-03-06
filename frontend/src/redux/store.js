import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./features/control/controlSlice";
import navigationReducer from "./features/navigation/navigationSlice";
import projectsReducer from "./features/projects/projectSlice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
    navigation: navigationReducer,
    projects: projectsReducer,
  },
});
