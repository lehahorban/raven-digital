import image1 from "../../assets/ourWorks/1.jpg";
import image2 from "../../assets/ourWorks/2.jpg";
import image3 from "../../assets/ourWorks/3.jpg";
import image4 from "../../assets/ourWorks/4.jpg";
import image5 from "../../assets/ourWorks/5.jpg";

const OurWorks = () => {
  return (
    <section id="portfolio" className="py-14 bg-black section">
      <div className="container">
        <h2 className="title mb-20 text-left">Our works</h2>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-grow flex-wrap md:flex-nowrap gap-5">
            <img
              src={image1}
              alt="work"
              className="flex-grow rounded-[4px] overflow-hidden"
            />
            <img
              src={image2}
              alt="work"
              className="flex-grow-[2] rounded-[4px] overflow-hidden"
            />
            <img
              src={image3}
              alt="work"
              className="flex-grow rounded-[4px] overflow-hidden"
            />
          </div>

          <div className="flex flex-grow flex-wrap md:flex-nowrap gap-5">
            <div className="flex-grow rounded-[4px] overflow-hidden">
              <h3 className="text-white uppercase font-bold text-3xl mb-4 ">
                not impressed?
              </h3>
              <p className="text-white text-xl font-light mb-7 max-w-[420px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button type="button" className="btn">
                See more
              </button>
            </div>
            <img
              src={image4}
              alt="work"
              className="flex-grow-[2] rounded-[4px] overflow-hidden"
            />
            <img
              src={image5}
              alt="work"
              className="flex-grow rounded-[4px] overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
    // <section className="pt-28 bg-black">
    //   <div className="container">
    //     <h2 className="title mb-40">Our works</h2>

    //     {/* <div className="flex flex-wrap gap-5">
    //       <div className="flex flex-grow gap-5">
    //         <div className="flex-grow rounded-[4px] overflow-hidden">
    //           <img src={image1} alt="work" />
    //         </div>
    //         <div className="flex-grow-[2] rounded-[4px] overflow-hidden">
    //           <img src={image2} alt="work" />
    //         </div>
    //         <div className="flex-grow rounded-[4px] overflow-hidden">
    //           <img src={image3} alt="work" />
    //         </div>
    //       </div>

    //       <div className="flex flex-grow gap-5">
    //         <div className="flex-grow rounded-[4px] overflow-hidden">
    //           <h3 className="text-white uppercase font-bold text-3xl mb-4 ">
    //             not impressed?
    //           </h3>
    //           <p className="text-white text-xl font-light mb-7 max-w-[420px]">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //           </p>
    //           <button type="button" className="btn">
    //             See more
    //           </button>
    //         </div>
    //         <div className="flex-grow-[2] rounded-[4px] overflow-hidden">
    //           <img src={image4} alt="work" />
    //         </div>
    //         <div className="flex-grow rounded-[4px] overflow-hidden">
    //           <img src={image5} alt="work" />
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </section>
  );
};

export default OurWorks;
