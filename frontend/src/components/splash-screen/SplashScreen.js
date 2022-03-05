import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSplashScreen } from "../../redux/features/control/controlSlice";

export default function SplashScreen({ children }) {
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

  return <div>{!showSplashScreen ? children : LoadingMessage()}</div>;
}

function LoadingMessage() {
  return (
    <div className="splash-screen align-items-center">
      Loading APP....
      <div className="loading-dot">.</div>
    </div>
  );
}
