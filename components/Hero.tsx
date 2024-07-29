// import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
      //   className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
      //  absolute top-0 left-0 flex items-center justify-center"
      >
        <div
        //   className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        //  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center mb-10">
            <h1 className="uppercase tracking-widest text-5xl text-center mr-2 text-custom-color">
              Daniel
            </h1>
            <h1 className="uppercase tracking-widest text-5xl text-center text-custom-color">
              Rodriguez
            </h1>
          </div>

          <div className="mb-10">
            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-4xl lg:text-5xl text-gray-800" // Changed color to dark gray
            />
          </div>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-custom-color">
            A recent computer science graduate student with experience in full-stack web development. My passion for programming is driven by a curiosity to solve real-world challenges and innovate with new ideas and websites.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon="->"
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
