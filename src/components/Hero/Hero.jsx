import hero from "../../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-14 flex section">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-20">
          <div className="pt-12">
            <h1 className="text-white font-bold text-6xl mb-7">
              WE ARE DIGITAL AGENCY
            </h1>
            <p className="text-white font-light text-xl mb-[58px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              id fringilla turpis tempor enim. Vel tristique suspendisse eget
              sodales egestas. Donec duis lacus, odio velit eu eget ac tortor.
              Ac sit ultricies hendrerit pellentesque arcu fames sit lectus.
              Scelerisque id bibendum velit cras.
            </p>
            <button className="btn" type="button">
              Learn more
            </button>
          </div>
          <img
            src={hero}
            alt="DIGITAL AGENCY"
            className="mx-auto w-full md:w-2/3 xl:w-1/2 xl:translate-x-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
