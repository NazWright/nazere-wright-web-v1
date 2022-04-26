import React from "react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * BackToBlogButton
 * button that navigates back to the list of articles.
 */
export default function BackToBlogButton({ backFunction }) {
  return (
    <div>
      <button onClick={backFunction}>
        <FaArrowLeft style={{ textShadow: "2px 2px 2px black" }} /> Back to All
        Articles
      </button>
      <div></div>
    </div>
  );
}
