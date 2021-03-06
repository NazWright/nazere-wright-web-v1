import React from "react";

export default function Slider({ children }) {
  return (
    <div className="d-flex justify-content-center full-width">
      <div
        className="card aboutme-card"
        style={{
          /*width: '70%', */ /*bottom: 100, */ /*right: 200, */ /*height: '100%', */ /*boxShadow: '0px 10px 30px rgb(98,99,101)', */ background:
            "transparent",
          /*borderRadius: 12, */ /*marginRight: 10, */ border:
            "0px solid rgb(190,24,89)",
        }}
      >
        <div
          className="card-body"
          style={{
            height: "100%",
            background: "white",
            borderRadius: 15,
            color: "red",
          }}
        >
          <h4 className="text-center card-title" style={{ color: "#9e78fb" }}>
            Web Development
          </h4>
          <h6
            className="text-center text-muted card-subtitle mb-2"
            style={{ color: "rgb(190,24,89)" }}
          />
          <p className="text-center card-text" style={{ color: "#0d2d4a" }}>
            I enjoy creating things that will be viewed by millions of people on
            the web.&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}
