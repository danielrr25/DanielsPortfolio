"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { otherProjects, projects } from "@/data";
import { PinContainer } from "./3d-pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10 max-w-5xl mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            className="h-[34rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer href={item.link} title={item.linkLabel}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-48 sm:h-56 mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {item.link && (
                <div className="flex justify-end items-center mt-5 mb-3">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.linkLabel}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              )}
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {otherProjects.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-96 w-[80vw] p-6 rounded-2xl border border-white/[0.1] hover:border-white/[0.2] transition duration-300"
            style={{ backgroundColor: "#04071D" }}
          >
            <h2 className="font-bold text-lg text-white">{item.title}</h2>
            <p className="text-sm mt-2" style={{ color: "#BEC1DD" }}>
              {item.des}
            </p>
            <div className="flex items-center mt-4 text-sm text-purple">
              {item.linkLabel}
              <FaLocationArrow className="ms-2" color="#CBACF9" size={12} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
