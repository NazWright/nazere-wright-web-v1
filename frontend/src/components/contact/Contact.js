import React from "react";
import ComingSoon from "../ComingSoon";
import { useSelector } from "react-redux";
import "./Contact.css";

export default function Contact() {
  const controlDimenstions = useSelector((state) => state.control);

  return (
    <div
      className="contact-wrapper"
      style={{ height: controlDimenstions.screenHeight }}
      id="bg-video-wrapper"
    >
      <div
        className="card"
        style={{ width: controlDimenstions.screenWidth / 1.5 }}
      >
        <div className="card-header">
          <span className="contact-me-header">Contact Me</span>
        </div>
        <div className="card-body">
          <form className="contact-me-form fluid-width d-flex justify-content-center flex-direction-col">
            <div className="fluid-width d-flex justify-content-center">
              <input type="text" placeholder="Name" />
            </div>

            <div className="fluid-width d-flex justify-content-center">
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="fluid-width d-flex justify-content-center">
              <input type="text" placeholder="Email" />
            </div>

            <div className="fluid-width d-flex justify-content-center flex-column">
              <select>
                <option disabled selected hidden>
                  Why are you reaching out?
                </option>
                <option> Possible Service (i.e. Website, Mobile App)</option>
                <option> Review of Overall Website </option>
                <option> Other Concern/Question</option>
              </select>
            </div>

            <div className="fluid-width d-flex justify-content-center">
              <textarea placeholder="Notes" />
            </div>
            <div className="fluid-width d-flex justify-content-center">
              <div className="button-container d-flex justify-content-end">
                <button
                  style={{
                    width:
                      controlDimenstions.deviceType === "desktop"
                        ? "12vw"
                        : "20vw",
                    height:
                      controlDimenstions.deviceType === "desktop"
                        ? "6vh"
                        : "6vh",
                  }}
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
