import image1 from "../../assets/client/mango.png";
import image2 from "../../assets/client/microsoft.png";
import image3 from "../../assets/client/amazon.png";
import image4 from "../../assets/client/nike.png";

const Clients = () => {
  return (
    <section className="bg-black py-14 section">
      <div className="container">
        <h2 className="title text-left mb-6">Clients</h2>
        <div className="flex gap-x-10 flex-wrap justify-center">
          <img src={image1} alt="mango" />
          <img src={image2} alt="microsoft" />
          <img src={image3} alt="amazon" />
          <img src={image4} alt="nike" />
          <img src={image1} alt="mango" />
          <img src={image2} alt="microsoft" />
          <img src={image3} alt="amazon" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
