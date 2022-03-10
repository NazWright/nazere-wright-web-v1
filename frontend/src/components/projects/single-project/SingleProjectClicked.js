import React from "react";
import { useDeviceInfo } from "../../../hooks/useDeviceInfo";

export default function SingleProjectClicked({ description }) {
  const { deviceType } = useDeviceInfo();

  return (
    <div>
      <p
        style={{
          fontSize:
            deviceType === "mobile" || deviceType === "tablet"
              ? "4vw"
              : "1.3vw",
          fontWeight: "600",
        }}
      >
        {description}
      </p>
    </div>
  );
}
