import React from "react";
import { useSelector } from "react-redux";

export default function AddToHome() {
  // only show this component on the desktop. This button is not compatible on mobile
  const { deviceType } = useSelector((state) => state.control);
  return (
    <div>
      {deviceType === "desktop" && (
        <button id="add-to-home">Add App To Home Screen</button>
      )}
    </div>
  );
}
