import Logo from "../../assets/logo.svg?react";
import Twitter from "../../assets/twitter.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Facebook from "../../assets/facebook.svg?react";

const Footer = () => {
  return (
    <footer id="elements" className="py-16 bg-black">
      <div className="container">
        <div className="flex flex-col items-center">
          <Logo className="mb-9" />
          <p className="text-[#787878] text-lg font-light mb-10 max-w-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
            fringilla turpis tempor enim. Vel tristique suspendisse
          </p>
          <ul className="flex gap-8  xl:gap-20 flex-wrap justify-center mb-16">
            <li>
              <p className="text-white text-lg font-bold">
                Website development
              </p>
            </li>
            <li>
              <p className="text-white text-lg font-bold">Branding</p>
            </li>
            <li>
              <p className="text-white text-lg font-bold">UI/UX design</p>
            </li>
            <li>
              <p className="text-white text-lg font-bold">Software</p>
            </li>
            <li>
              <p className="text-white text-lg font-bold">Digital marketing</p>
            </li>
          </ul>
          <div className="flex gap-7 mb-14">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center hover:shadow-main_shadow hover:bg-slate-200 rounded-full transition-all duration-300 group"
            >
              <Facebook className="fill-white group-hover:fill-sky-700  transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center hover:shadow-main_shadow hover:bg-slate-200 rounded-full transition-all duration-300 group"
            >
              <Twitter className="fill-white group-hover:fill-sky-700  transition-all duration-300" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center hover:shadow-main_shadow hover:bg-slate-200 rounded-full transition-all duration-300 group"
            >
              <Instagram className="fill-white group-hover:fill-sky-700  transition-all duration-300" />
            </a>
          </div>
          <p className="text-white text-base font-normal">
            Copyright © 2020. Raven Digital. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
