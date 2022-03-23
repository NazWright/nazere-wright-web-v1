import React, { Component } from "react";
import TopSkills from "../skills/TopSkills";
import FeaturedProject from "../projects/FeaturedProject";
import AboutMe from "../aboutme/AboutMe";
import { Carousel } from "react-bootstrap";

const sections = [
  {
    id: 0,
    component: <TopSkills />,
  },
  {
    id: 1,
    component: <FeaturedProject />,
  },
  {
    id: 2,
    component: <AboutMe />,
  },
];
export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      sliderPage: 0,
    };
    this.changeCarouselItem = this.changeCarouselItem.bind(this);
  }

  // changes the slider page
  changeCarouselItem(selectedIndex, e) {
    this.setState({ sliderPage: selectedIndex });
  }

  render() {
    return (
      <div className="home">
        <Carousel
          activeIndex={this.state.sliderPage}
          onSelect={this.changeCarouselItem}
          slide={true}
          touch={true}
        >
          {sections.map((section) => {
            return (
              <Carousel.Item style={{ height: "100%" }} key={section.id}>
                {section.component}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
