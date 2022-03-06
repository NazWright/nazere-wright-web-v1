import { useSelector } from "react-redux";

export function useDeviceInfo() {
  const control = useSelector((state) => state.control);
  const deviceIsDesktop = control.deviceType === "desktop" ? true : false;
  return { deviceIsDesktop, ...control };
}
