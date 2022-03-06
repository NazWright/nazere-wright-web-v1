import React, { useEffect } from "react";
import Home from "./components/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { useDispatch } from "react-redux";
import { setDimensions } from "./redux/features/control/controlSlice";
import VideoBackground from "./components/videobackground/VideoBackground";
import Nav from "./components/nav/Nav";
import SplashScreen from "./components/splash-screen/SplashScreen";
import AddToHome from "./components/add-to-home/AddToHome";
import StickyBreadCrumb from "./components/sticky-breadcrumb/StickyBreadCrumb";
import SplashScreenContent from "./components/nw-splash-screen-content/SplashScreenContent";

import { useDeviceInfo } from "./hooks/useDeviceInfo";

function App() {
  const dispatch = useDispatch();
  const { deviceIsDesktop } = useDeviceInfo();

  useEffect(() => {
    const handleScreenResize = () => {
      const hasWindow = typeof window !== "undefined";
      dispatch(
        setDimensions({
          payload: {
            screenHeight: hasWindow ? window.innerHeight : null,
            screenWidth: hasWindow ? window.innerWidth : null,
          },
        })
      );
    };

    handleScreenResize();

    window.addEventListener("resize", handleScreenResize);

    return () => {
      // cleanup
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [dispatch]);

  console.log("updated");

  return (
    <div className="App">
      {deviceIsDesktop && (
        <StickyBreadCrumb>
          <button className="add-to-home">Add Application to Desktop</button>
        </StickyBreadCrumb>
      )}

      <SplashScreen splashContent={<SplashScreenContent />}>
        <div>
          <VideoBackground
            src={"https://nxwv1images.s3.amazonaws.com/codingvidres.mp4"}
          />
        </div>
        <Nav />
        <AddToHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </SplashScreen>
    </div>
  );
}

export default App;
