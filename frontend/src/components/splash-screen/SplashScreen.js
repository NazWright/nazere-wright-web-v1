import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";

export default function SplashScreen({ children, splashContent }) {
  const { showSplashScreen } = useSelector((state) => state.control);
  const dispatch = useDispatch();

  useEffect(() => {
    async function showSplashScreen() {
      try {
        // await auth0Client.loadSession();
        setTimeout(() => {
          dispatch(toggleSplashScreen(false));
        }, 1000);
      } catch (err) {
        console.log(err);
        dispatch(toggleSplashScreen(false));
      }
    }
    showSplashScreen();
    return () => {
      // cleanup
    };
  });

  function LoadingMessage() {
    return <div className="splash-screen">{splashContent}</div>;
  }

  return <div>{!showSplashScreen ? children : LoadingMessage()}</div>;
}
