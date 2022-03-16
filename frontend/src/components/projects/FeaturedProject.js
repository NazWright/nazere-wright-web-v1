import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import "./Projects.css";

export default function FeaturedProject() {
  return (
    <section id="featured-project">
      <div className="row">
        <div className="col">
          <div />
        </div>
        <div className="col">
          <h1
            className="display-5 text-center"
            style={{
              color: "white",
              fontSize: 35,
              textShadow: "3px 3px 3px #9e78fb",
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            Featured Project
          </h1>
        </div>
        <div className="col">
          <Link to="/projects">
            <h1
              className="display-5 text-end"
              style={{
                color: "rgb(243,146,6)",
                fontSize: 20,
                textTransform: "uppercase",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              View All Projects&gt;&gt;&gt;
            </h1>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row row-featured-proj">
          <div className="col">
            <img
              alt={images.FEATPROJ.altText}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
                border: "1px solid",
              }}
              src={images.FEATPROJ}
            />
          </div>
          <div
            className="col"
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="card card-featured-proj">
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{
                    color: "rgb(158, 120, 251)",
                    font: "bold normal normal 1.5rem/1 FontAwesome",
                  }}
                >
                  Omnivore App Marketplace
                </h4>
                <p className="card-text" style={{ color: "grey" }}>
                  An online marketplace that promotes new technology
                  integrations to restaurant industry Point of Sale systems.
                  Designed using WordPress.
                </p>
                <div
                  className="app-marketplace-link"
                  onClick={() =>
                    (window.location.href =
                      "https://omnivoredev.wpengine.com/connect-marketplace/")
                  }
                >
                  <i className="fa fa-external-link" style={{ fontSize: 30 }} />
                  <span>Go to website</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
