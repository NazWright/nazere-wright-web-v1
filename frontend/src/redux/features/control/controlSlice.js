import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  deviceType: "",
  installedStandAlone: false,
  showInstallationBreadCrumb: false,
  IOSstandAloneMode:
    "standalone" in window.navigator && window.navigator.standalone,
  isIOSDevice: /iphone|ipad|ipod/.test(
    window.navigator.userAgent.toLowerCase()
  ),
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    setDimensions: (state, action) => {
      function getDeviceType() {
        if (window.innerWidth < 321) {
          //    mobiles
          return "mobile";
        } else if (window.innerWidth > 321 && window.innerWidth <= 576) {
          //    smaller devices
          return "mobile";
        } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
          //    medium devices
          return "tablet";
        } else if (window.innerWidth > 768 && window.innerWidth <= 991) {
          //    larger devices
          return "tablet";
        } else if (window.innerWidth > 991 && window.innerWidth <= 1200) {
          //    larger devices
          return "desktop";
        } else if (window.innerWidth > 1201 && window.innerWidth <= 1400) {
          //    x- larger devices
          return "desktop";
        } else if (window.innerWidth > 1400) {
          //    xx- larger devices
          return "desktop";
        }
      }
      state.screenHeight = action.payload.screenHeight || window.innerHeight;
      state.screenWidth = action.payload.screenWidth || window.innerWidth;
      state.deviceType = getDeviceType();
    },
    installStandAlone: (state, action) => {
      console.log("show");
      state.installedStandAlone = true;
      state.showInstallationBreadCrumb = false;
    },
    showBreadCrumb: (state, action) => {
      state.showInstallationBreadCrumb = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDimensions, installStandAlone, showBreadCrumb } =
  controlSlice.actions;

export default controlSlice.reducer;
