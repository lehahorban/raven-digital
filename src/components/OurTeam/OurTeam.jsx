import image1 from "../../assets/ourTeam/1.jpg";
import image2 from "../../assets/ourTeam/2.jpg";
import image3 from "../../assets/ourTeam/3.jpg";
import image4 from "../../assets/ourTeam/4.jpg";
import Twitter from "../../assets/twitter.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Facebook from "../../assets/facebook.svg?react";

const OurTeam = () => {
  return (
    <section id="team" className="py-14">
      <div className="container">
        <h2 className="title text-left mb-14">Our team</h2>
        <div className="flex flex-wrap xl:flex-nowrap gap-6">
          <div className="relative rounded-[4px] overflow-hidden group w-full md:w-auto">
            <img src={image1} alt="foto" className="w-full md:w-auto" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex px-7 pt-10 pb-14 top-0 left-0 absolute bg-blue_ligth w-full h-full flex-col items-center ">
              <div className="flex-1">
                <p className="text-white text-2xl font-medium mb-4 text-center">
                  Jane Doe
                </p>
                <p className="text-white text-lg font-medium mb-14 text-center">
                  Company / CEO
                </p>
                <p className="text-white text-lg font-light text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit id fringilla turpis tempor enim. Vel tristique
                  suspendisse
                </p>
              </div>
              <div className="flex gap-7">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] overflow-hidden group w-full md:w-auto">
            <img src={image2} alt="foto" className="w-full md:w-auto" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex px-7 pt-10 pb-14 top-0 left-0 absolute bg-blue_ligth w-full h-full flex-col items-center">
              <div className="flex-1">
                <p className="text-white text-2xl font-medium mb-4 text-center">
                  Jane Doe
                </p>
                <p className="text-white text-lg font-medium mb-14 text-center">
                  Company / CEO
                </p>
                <p className="text-white text-lg font-light text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit id fringilla turpis tempor enim. Vel tristique
                  suspendisse
                </p>
              </div>
              <div className="flex gap-7">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] overflow-hidden group w-full md:w-auto">
            <img src={image3} alt="foto" className="w-full md:w-auto" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex px-7 pt-10 pb-14 top-0 left-0 absolute bg-blue_ligth w-full h-full flex-col items-center">
              <div className="flex-1">
                <p className="text-white text-2xl font-medium mb-4 text-center">
                  Jane Doe
                </p>
                <p className="text-white text-lg font-medium mb-14 text-center">
                  Company / CEO
                </p>
                <p className="text-white text-lg font-light text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit id fringilla turpis tempor enim. Vel tristique
                  suspendisse
                </p>
              </div>
              <div className="flex gap-7">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] overflow-hidden group w-full md:w-auto">
            <img src={image4} alt="foto" className="w-full md:w-auto" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex px-7 pt-10 pb-14 top-0 left-0 absolute bg-blue_ligth w-full h-full flex-col items-center">
              <div className="flex-1">
                <p className="text-white text-2xl font-medium mb-4 text-center">
                  Jane Doe
                </p>
                <p className="text-white text-lg font-medium mb-14 text-center">
                  Company / CEO
                </p>
                <p className="text-white text-lg font-light text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit id fringilla turpis tempor enim. Vel tristique
                  suspendisse
                </p>
              </div>
              <div className="flex gap-7">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="fill-white hover:fill-slate-600 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
