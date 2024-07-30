/* eslint-disable */
import { FaLocationArrow, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="md:mt-10 my-5 text-center" style={{ color: '#9f7aea' }}>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <a href="mailto:danielrr25@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a href="Resume_DR.pdf" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-black">
          Copyright © {new Date().getFullYear()} Daniel Rodriguez
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a
            href="https://github.com/danielrr25"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaGithub size={20} className="text-indigo-600" />
          </a>
          <a
            href="https://twitter.com/danielrr25"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaTwitter size={20} className="text-indigo-600" />
          </a>
          <a
            href="https://linkedin.com/in/daniel-rodriguez-549255206"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaLinkedin size={20} className="text-indigo-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
