import React from "react";
import omnivoreWireFrame from "./Screen Shot 2022-01-03 at 12.58.22 PM.png";

export default function FeaturedProject() {
  return (
    <section style={{ marginBottom: 50, marginTop: 50 }}>
      <div className="row">
        <div className="col">
          <div />
        </div>
        <div className="col">
          <h1
            className="display-5 text-center"
            style={{
              color: "rgb(152,71,190)",
              fontSize: 35,
              textShadow: "0px 0px 7px #9e78fb",
              textTransform: "uppercase",
            }}
          >
            Featured Project
          </h1>
        </div>
        <div className="col">
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
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
                border: "1px solid",
              }}
              src={omnivoreWireFrame}
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
            <div
              className="card"
              style={{ right: 100, boxShadow: "3px 5px 10px" }}
            >
              <div className="card-body">
                <h4 className="card-title" style={{ color: "rgb(152,71,190)" }}>
                  Omnivore App Marketplace
                </h4>
                <p className="card-text" style={{ color: "grey" }}>
                  An online marketplace that promotes new technology
                  integrations to restaurant industry Point of Sale systems.
                  Designed using WordPress.
                </p>
                <div>
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
