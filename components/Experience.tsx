/* eslint-disable */

import React from "react";

import { experience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12">
        <Button
          as="div"
          duration={15000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          containerClassName="w-full"
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex flex-col gap-4 p-6 md:p-10 text-start w-full">
            <p className="text-lg md:text-2xl text-white">
              <span className="text-purple font-bold">Now:</span>{" "}
              {experience.now}
            </p>
            <p className="text-base md:text-xl text-gray-300">
              <span className="text-purple font-bold">Previously:</span>{" "}
              {experience.previously}
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
