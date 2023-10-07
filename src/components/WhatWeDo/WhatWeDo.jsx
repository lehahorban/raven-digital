import One from "../../assets/whatWeDo/1.svg?react";
import Two from "../../assets/whatWeDo/2.svg?react";
import Three from "../../assets/whatWeDo/3.svg?react";
import Four from "../../assets/whatWeDo/4.svg?react";
import Five from "../../assets/whatWeDo/5.svg?react";
import Six from "../../assets/whatWeDo/6.svg?react";

const WhatWeDo = () => {
  return (
    <section id="services" className="py-14 section">
      <div className="container">
        <h2 className="title">What we do</h2>
        <ul className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-3 py-20">
          <li className="px-6 pt-9 pb-12 bg-gray_card relative">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                APP DEVELOPMENT
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-[136px] h-[102px] bg-blue rounded-tl-[69.5px] flex items-center justify-center">
              <One />
            </div>
          </li>
          <li className="px-6 pt-9 pb-12 bg-gray_card relative overflow-hidden">
            <div className="flex flex-col justify-between h-full relative z-20">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                WEBSITE DEVELOPMENT
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="z-10 absolute left-2 top-5 w-[548px] h-[548px] bg-blue rounded-[548px] "></div>
            <Two className="absolute bottom-[8%] right-[11%] z-20" />
          </li>
          <li className="px-6 pt-9 pb-12 bg-gray_card relative">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                DIGITAL MARKETING
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-[136px] h-[102px] bg-blue rounded-tl-[69.5px] flex items-center justify-center">
              <Three />
            </div>
          </li>
          <li className="px-6 pt-9 pb-12 bg-gray_card relative">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                DIGITAL MARKETING
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-[136px] h-[102px] bg-blue rounded-tl-[69.5px] flex items-center justify-center">
              <Four />
            </div>
          </li>
          <li className="px-6 pt-9 pb-12 bg-gray_card relative">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                SEO & CONTENT WRITING
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-[136px] h-[102px] bg-blue rounded-tl-[69.5px] flex items-center justify-center">
              <Five />
            </div>
          </li>
          <li className="px-6 pt-9 pb-12 bg-gray_card relative">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-white font-extrabold text-2xl mb-9 ">
                GRAPHIC DESIGNING
              </h3>
              <p className="text-base font-normal text-light mb-9">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a
                href="#"
                className="text-base font-normal text-light underline"
              >
                Contact us
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-[136px] h-[102px] bg-blue rounded-tl-[69.5px] flex items-center justify-center">
              <Six />
            </div>
          </li>
          <li className="col-span-2 p-8 flex flex-col md:items-center xl:items-start">
            <h3 className="text-white uppercase font-bold text-3xl mb-4 max-w-[252px]">
              Solutions for your bussiness
            </h3>
            <p className="text-white text-xl font-light mb-7 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button" className="btn">
              Learn more
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
