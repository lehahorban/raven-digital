const TestimonialsCard = ({
  name,
  company,
  testimonial1,
  testimonial2,
  image,
}) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center gap-16 pr-10 ">
        <img
          src={image}
          alt="foto girl"
          className="rounded-tl rounded-br rounded-bl rounded-tr-[90px]"
        />
        <div>
          <h2 className="title mb-4 text-left">Testimonials</h2>
          <p className="mb-8 text-[#D0D0D0] text-2xl font-medium">{name}</p>
          <p className="mb-4 text-[#727272] text-2xl font-medium">{company}</p>
          <p className="mb-6 text-white text-xl font-light">{testimonial1}</p>
          <p className="text-white text-xl font-light">{testimonial2}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
