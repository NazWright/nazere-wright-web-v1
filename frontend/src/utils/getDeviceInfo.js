import { useSelector } from "react-redux";

export function getDeviceInfo() {
  const control = useSelector((state) => state.control);
  return control;
}
