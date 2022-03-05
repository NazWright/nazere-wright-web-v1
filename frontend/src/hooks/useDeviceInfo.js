import { useSelector } from "react-redux";

export function useDeviceInfo() {
  const control = useSelector((state) => state.control);
  return control;
}
