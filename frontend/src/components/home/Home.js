import React from "react";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import Header from "../header/Header";

export default function Home({ control }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <TopSkills />
      <FeaturedProject />
      <AboutMe />
    </div>
  );
}
