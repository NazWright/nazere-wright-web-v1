import React from "react";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import Header from "../header/Header";
import { Carousel } from "react-bootstrap";

export default function Home({ control }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Carousel slide={true} touch={true}>
        <Carousel.Item interval={3000}>
          <TopSkills />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <FeaturedProject />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <AboutMe />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
