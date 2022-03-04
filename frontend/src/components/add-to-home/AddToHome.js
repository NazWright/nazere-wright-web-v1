import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AddToHome() {
  // only show this component on the desktop. This button is not compatible on mobile
  const { deviceType } = useSelector((state) => state.control);
  const [showInstallMessage, setShowInstallMessage] = useState(false);

  useEffect(() => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  });

  return (
    <div>
      {deviceType === "desktop" && (
        <button id="add-to-home">Add App To Home Screen</button>
      )}

      {showInstallMessage ? (
        <div id="add-to-home"> Add to Home </div>
      ) : undefined}
    </div>
  );
}
