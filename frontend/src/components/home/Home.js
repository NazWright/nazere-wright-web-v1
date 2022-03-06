import React from "react";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import SplashScreen from "../splash-screen/SplashScreen";
import Header from "../header/Header";

export default function Home({ control }) {
  return (
    <SplashScreen>
      <div id="bg-video-wrapper" style={{ overflow: "hidden" }}>
        <Header />
        <TopSkills />
        <FeaturedProject />
        <AboutMe />
      </div>
    </SplashScreen>
  );
}
