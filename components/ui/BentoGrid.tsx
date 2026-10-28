'use client';

import { cn } from "@/utils/cn";


import { IoCopyOutline } from "react-icons/io5"; // Import icon if needed
import { useState } from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";
import { education, techStack, whatIBuild } from "@/data";
import { motion, useReducedMotion } from "framer-motion";

// One tech stack pill: breathes in a slow wave, lifts on hover, bounces on click
const TechPill = ({ name, index }: { name: string; index: number }) => {
  const reduceMotion = useReducedMotion();
  const row = Math.floor(index / 2);

  return (
    <motion.button
      type="button"
      className="py-2 px-4 text-xs lg:text-base rounded-lg text-center bg-[#10132E] text-[#C1C2D3] border border-transparent cursor-pointer select-none"
      animate={
        reduceMotion
          ? undefined
          : {
              boxShadow: [
                "0 0 0px rgba(203,172,249,0)",
                "0 0 14px rgba(203,172,249,0.35)",
                "0 0 0px rgba(203,172,249,0)",
              ],
              borderColor: [
                "rgba(203,172,249,0)",
                "rgba(203,172,249,0.4)",
                "rgba(203,172,249,0)",
              ],
            }
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: row * 0.25 + (index % 2) * 0.12,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.07,
        y: -2,
        backgroundColor: "#1d2150",
        color: "#ffffff",
      }}
      whileTap={{ scale: 0.9 }}
    >
      {name}
    </motion.button>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 lg:grid-rows-6 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "danielrr25@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,243,200,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-50"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mt-[-20px]">            
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white`}>
            {title}
          </div>

          {id === 4 && (
            <div className="flex flex-col gap-4 mt-3 z-10">
              {education.map((item) => (
                <div key={item.school}>
                  <p className="text-white font-bold text-base lg:text-lg">
                    {item.school}
                  </p>
                  <p className="text-[#C1C2D3] text-sm lg:text-base">
                    {item.degree}
                  </p>
                  <p className="text-[#8b8fb3] text-xs lg:text-sm">
                    {item.dates}
                  </p>
                </div>
              ))}
            </div>
          )}

          {id === 2 && (
            <div className="flex flex-col gap-5 mt-6 z-10">
              {whatIBuild.map((item) => (
                <div key={item.name} className="border-l-2 border-purple pl-4">
                  <p className="text-white font-bold text-base lg:text-xl">
                    {item.name}
                  </p>
                  <p className="text-[#C1C2D3] text-sm lg:text-base mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {id === 3 && (
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((item, i) => (
                <TechPill key={item} name={item} index={i} />
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
