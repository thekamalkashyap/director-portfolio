import React from "react";
import Lottie from "lottie-react";
import camera from "../../public/cameradark.json";

const Hero = () => {
  const cameraRef = React.useRef();
  return (
    <div className="hero bg-[url('/bg.jpg')] h-screen">
      <img className=" absolute -left-2 -top-2" src="/logo.png" alt="logo" />
      <div className="flex justify-center items-center flex-col">
        <h2 className=" break-words text-8xl mb-8 tracking-[-0.5rem] font-serif uppercase text-[#fffc03] ">Wishvaas Khoraa</h2>
        <p className=" font-mono text-2xl ">Director - editor - colorist - Poet - Graphic designer - painter</p>
      </div>
    </div>
  );
};

export default Hero;
