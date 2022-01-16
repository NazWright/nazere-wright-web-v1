import React from "react";

export default function Footer() {
  return (
    <section style={{ height: "100%" }}>
      <footer
        className="footer-basic"
        style={{
          background:
            "linear-gradient(rgb(241,175,12), rgb(247,208,113) 47%, white 96%)",
          zIndex: 7,
        }}
      >
        <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram" />
          </a>
          <a href="#">
            <i className="icon ion-social-twitter" />
          </a>
          <a href="#">
            <i className="icon ion-social-facebook" />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Projects</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Skills</a>
          </li>
        </ul>
        <p className="copyright">Nazere Wright © 2021</p>
      </footer>
    </section>
  );
}
