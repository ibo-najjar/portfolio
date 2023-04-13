"use client";

import { FC } from "react";
import Spline from "@splinetool/react-spline";

const Room = () => {
  return (
    <div className="h-[400px] w-full relative">
      <Spline scene="https://prod.spline.design/zTwiv0e0LOYrFVFL/scene.splinecode" />
    </div>
  );
};

export default Room;
