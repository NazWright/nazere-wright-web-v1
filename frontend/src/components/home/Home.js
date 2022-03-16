import React from "react";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const sections = [<TopSkills />, <FeaturedProject />, <AboutMe />];

  return (
    <div className="home">
      <Carousel slide={true} touch={true}>
        {sections.map((section) => {
          return (
            <Carousel.Item style={{ height: "100%" }}>{section}</Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
