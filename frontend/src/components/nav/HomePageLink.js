import React from "react";
import { useDeviceInfo } from "../../hooks/useDeviceInfo";

export default function HomePageLink({ link, handleLinkClick }) {
  const { deviceIsDesktop } = useDeviceInfo();

  return (
    <div
      className={`${
        deviceIsDesktop ? "" : "fluid-width"
      } col col-2 d-flex justify-content-center `}
    >
      <div onClick={() => handleLinkClick(link)}>
        <img
          height={220}
          src={link.imageLink && link.image ? link.image : undefined}
          style={{ cursor: "pointer" }}
          alt="home page link"
        />
      </div>
    </div>
  );
}
