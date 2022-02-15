import React from "react";
import Nav from "../nav/Nav";
import Hero from "../header/Hero";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import Footer from "../footer/Footer";
import VideoBackground from "../videobackground/VideoBackground";

export default function Home() {
  return (
    <div id="bg-video-wrapper">
      <VideoBackground />
      <Nav />
      <Hero />
      <TopSkills />
      <FeaturedProject />
      <AboutMe />
    </div>
  );
}

/*
<Nav />
      <Hero />
      <TopSkills />
      <FeaturedProject />
      <AboutMe />
      <Footer />

*/
