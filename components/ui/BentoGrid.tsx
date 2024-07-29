'use client';

import { cn } from "@/utils/cn";
import GridGlobe from "./GridGlobe"; // Make sure this path is correct

import { IoCopyOutline } from "react-icons/io5"; // Import icon if needed
import { useState } from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-6 gap-4 lg:gap-8 mx-auto",
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
  const leftLists = ["Python", "ReactJS", "Typescript", "NextJS", "Java"];
  const rightLists = ["VueJS", "MySQL", "JavaScript", "C", "MongoDB"];
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
        {
          'md:col-span-6 md:row-span-6 lg:col-span-3 lg:row-span-6': id === 1, // Make the first item larger
          'md:col-span-3 md:row-span-3 lg:col-span-2 lg:row-span-3': id === 2,
        },
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
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="grid grid-cols-2 gap-2">
              {leftLists.concat(rightLists).map((item, i) => (
                <span
                  key={i}
                  className="py-2 px-4 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
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
