import React from "react";
import Curve from "../curve/Curve";
import Header from "./Header";

export default function Hero() {
  return (
    <div>
      <Header />
      <Curve upward={false} />
    </div>
  );
}
