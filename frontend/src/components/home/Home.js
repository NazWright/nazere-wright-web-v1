import React from "react";
import Nav from "../nav/Nav";
import Hero from "../header/Hero";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <TopSkills />
      <FeaturedProject />
      <AboutMe />
      <Footer />
    </div>
  );
}
