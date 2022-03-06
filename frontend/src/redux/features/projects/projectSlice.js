import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    rateProject: (state, action) => {
      state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
    },
  },
});

export const { getProjects, rateProject } = projectSlice.actions;

// asynchronous thunk which will fetch our projects
export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      // fetch from the api backend
      const response = await axios.get("/api/projects");
      dispatch(getProjects(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// asynchronous thunk which will update our projects
export const updateProjectRating = (ratingInfo) => {
  return async (dispatch) => {
    try {
      // fetch from the api backend
      const response = await axios.put("/api/projects", ratingInfo);
      dispatch(rateProject(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default projectSlice.reducer;
