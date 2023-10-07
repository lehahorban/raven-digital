import image1 from "../../assets/blog/1.png";
import image2 from "../../assets/blog/2.png";
import image3 from "../../assets/blog/3.png";

const Blog = () => {
  return (
    <section id="news" className="py-14 section">
      <div className="container">
        <h2 className="title mb-14">Blog</h2>
        <div className="flex flex-wrap justify-center xl:flex-nowrap gap-7">
          <div className="p-6 bg-dark rounded-tr-[90px] relative group">
            <div className="relative z-10">
              <img
                src={image1}
                alt="image"
                className="rounded-tl-[5px] rounded-tr-[90px] rounded-br-[5px] rounded-bl-[5px] w-full"
              />
              <div className="w-[125px] h-[53px] flex items-center justify-center bg-blue absolute left-0 bottom-0 rounded-tr-[69.5px] rounded-br-[4px] rounded-bl-[4px]">
                <p className="text-white text-lg font-medium">Techno</p>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex justify-between mb-4">
                <p className="text-[#727272] text-lg font-medium">07/04/2021</p>
                <p className="text-[#727272] text-lg font-medium">1502</p>
              </div>
              <p className="text-[#D0D0D0] text-2xl font-medium mb-3">
                Tik tok Banned in India
              </p>
              <p className="text-[#9C9898] text-lg  font-light group-hover:text-white transition-all duration-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                id fringilla turpis tempor enim. Vel tristique suspendisse eget
                sodales egestas. Donec duis lacus, odio velit
              </p>
            </div>
            <div className="w-full h-3/4 absolute left-0 bottom-0 bg-blue shadow-main_shadow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-6 bg-dark rounded-tr-[90px] relative group">
            <div className="relative z-10">
              <img
                src={image2}
                alt="image"
                className="rounded-tl-[5px] rounded-tr-[90px] rounded-br-[5px] rounded-bl-[5px] w-full"
              />
              <div className="w-[125px] h-[53px] flex items-center justify-center bg-blue absolute left-0 bottom-0 rounded-tr-[69.5px] rounded-br-[4px] rounded-bl-[4px]">
                <p className="text-white text-lg font-medium">Techno</p>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex justify-between mb-4">
                <p className="text-[#727272] text-lg font-medium">07/04/2021</p>
                <p className="text-[#727272] text-lg font-medium">1502</p>
              </div>
              <p className="text-[#D0D0D0] text-2xl font-medium mb-3">
                Lorem ipsum
              </p>
              <p className="text-[#9C9898] text-lg  font-light group-hover:text-white transition-all duration-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                id fringilla turpis tempor enim. Vel tristique suspendisse eget
                sodales egestas. Donec duis lacus, odio velit
              </p>
            </div>
            <div className="w-full h-3/4 absolute left-0 bottom-0 bg-blue shadow-main_shadow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-6 bg-dark rounded-tr-[90px] relative group ">
            <div className="relative z-10">
              <img
                src={image3}
                alt="image"
                className="rounded-tl-[5px] rounded-tr-[90px] rounded-br-[5px] rounded-bl-[5px] w-full"
              />
              <div className="w-[125px] h-[53px] flex items-center justify-center bg-blue absolute left-0 bottom-0 rounded-tr-[69.5px] rounded-br-[4px] rounded-bl-[4px]">
                <p className="text-white text-lg font-medium">Techno</p>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <div className="flex justify-between mb-4">
                <p className="text-[#727272] text-lg font-medium">07/04/2021</p>
                <p className="text-[#727272] text-lg font-medium">1502</p>
              </div>
              <p className="text-[#D0D0D0] text-2xl font-medium mb-3">
                Tik tok Banned in India
              </p>
              <p className="text-[#9C9898] text-lg  font-light group-hover:text-white transition-all duration-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                id fringilla turpis tempor enim. Vel tristique suspendisse eget
                sodales egestas. Donec duis lacus, odio velit
              </p>
            </div>
            <div className="w-full h-3/4 absolute left-0 bottom-0 bg-blue shadow-main_shadow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
