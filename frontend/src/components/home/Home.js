import React from "react";
import Hero from "../header/Hero";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import SplashScreen from "../splash-screen/SplashScreen";

export default function Home({ control }) {
  return (
    <SplashScreen>
      <div id="bg-video-wrapper" style={{ overflow: "hidden" }}>
        <Hero />
        <TopSkills />
        <FeaturedProject />
        <AboutMe />
      </div>
    </SplashScreen>
  );
}
