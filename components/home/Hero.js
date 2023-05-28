import React from "react";
import Lottie from "lottie-react";
import camera from "../../public/cameradark.json";

const Hero = () => {
  const cameraRef = React.useRef();
  return (
    <div className="hero bg-[url('/bg.jpeg')] min-h-screen bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <Lottie
          lottieRef={cameraRef}
          onComplete={() => {
            cameraRef.current.goToAndPlay(120, true);
          }}
          className="lottie-hero"
          animationData={camera}
          loop={false}
        /> */}
        {/* <div className=" w-[300px] md:w-[450px] ">
          <h1 className="text-5xl font-bold">Wishvaas khoraa </h1>
          <h2 className="text-3xl opacity-80 font-bold">Director - editor</h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
