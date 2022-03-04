import React from "react";
import { FiShare } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";

export default function IOSModalContent() {
  return (
    <div>
      {" "}
      <p>
        follow these steps:
        <ol>
          <li>
            Press the {<FiShare />} "Share" button at the bottom of your web
            broswer.
          </li>
          <li>Select the {<CgAddR />} "Add to Home Screen" option </li>
          <li>Click "Add" in the top right hand corner.</li>
        </ol>
        Thank you so much!
      </p>
    </div>
  );
}
