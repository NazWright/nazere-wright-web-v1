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
import SplashScreen from "./components/splash-screen/SplashScreen";
import SplashScreenContent from "./components/nw-splash-screen-content/SplashScreenContent";
import { useDeviceInfo } from "./hooks/useDeviceInfo";
import NavContainer from "./components/nav/NavContainer";
import BlogContainer from "./components/blog/BlogContainer";

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

  return (
    <div className="App" id="bg-video-wrapper" style={{ height: "100%" }}>
      <SplashScreen splashContent={<SplashScreenContent />}>
        <div>
          <VideoBackground
            src={"https://nxwv1images.s3.amazonaws.com/codingvidres.mp4"}
          />
        </div>
        <NavContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<BlogContainer />} />
        </Routes>
      </SplashScreen>
    </div>
  );
}

export default App;
