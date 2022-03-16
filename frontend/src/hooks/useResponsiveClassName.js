import { useSelector } from "react-redux";

export function useResponsiveClassName() {
  const control = useSelector((state) => state.control);
  const deviceIsDesktop = control.deviceType === "desktop" ? true : false;
  const responsiveClassName = deviceIsDesktop
    ? "desktop"
    : control.deviceType === "tablet"
    ? "tablet"
    : "mobile";
  return responsiveClassName;
}
