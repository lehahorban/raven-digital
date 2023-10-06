import Tel from "../../assets/tel.svg?react";
import Email from "../../assets/email.svg?react";
import Address from "../../assets/address.svg?react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-14">
      <div className="container">
        <h2 className="title mb-20">Contacts</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-60">
          <form className="flex flex-col gap-6">
            <label
              className="text-white text-lg font-medium flex flex-col"
              htmlFor="name"
            >
              Name
              <input
                className="px-2 py-3 placeholder:text-lg placeholder:font-medium placeholder:text-[#2E2E2E] border-b-4 border-[#536A82] rounded-[4px] bg-transparent outline-none"
                type="text"
                id="name"
                placeholder="Name here"
              />
            </label>
            <label
              className="text-white text-lg font-medium flex flex-col"
              htmlFor="last_name"
            >
              Last name
              <input
                className="px-2 py-3 placeholder:text-lg placeholder:font-medium placeholder:text-[#2E2E2E] border-b-4 border-[#536A82] rounded-[4px] bg-transparent outline-none"
                type="text"
                id="last_name"
                placeholder="Last name here"
              />
            </label>
            <label
              className="text-white text-lg font-medium flex flex-col"
              htmlFor="email"
            >
              Email
              <input
                className="px-2 py-3 placeholder:text-lg placeholder:font-medium placeholder:text-[#2E2E2E] border-b-4 border-[#536A82] rounded-[4px] bg-transparent outline-none"
                type="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </label>
            <label
              className="text-white text-lg font-medium flex flex-col"
              htmlFor="name"
            >
              Message
              <textarea
                className="px-2 py-3 placeholder:text-lg placeholder:font-medium placeholder:text-[#2E2E2E] border-b-4 border-[#536A82] rounded-[4px] bg-transparent outline-none"
                type="text"
                id="message"
                placeholder="Start typing"
              />
            </label>
            <button type="submit" className="btn max-w-fit">
              Send message
            </button>
          </form>
          <address className="not-italic">
            <ul className="flex flex-col gap-14">
              <li>
                <div className="flex gap-3 mb-7">
                  <Tel />
                  <p className="text-white text-lg font-bold">Mobile number</p>
                </div>
                <a
                  className="text-[#B6B6B6] text-lg font-medium flex gap-7 mb-5 items-center pl-9"
                  href="tel:12529373762"
                >
                  +1 252-937-3762
                  <div className="btn w-28">Call</div>
                </a>
                <a
                  className="text-[#B6B6B6] text-lg font-medium flex gap-7 items-center pl-9"
                  href="tel:12529373762"
                >
                  +1 252-937-3762
                  <div className="btn w-28">Call</div>
                </a>
              </li>
              <li>
                <div className="flex gap-3 mb-7">
                  <Email />
                  <p className="text-white text-lg font-bold">Email</p>
                </div>
                <a className="text-[#B6B6B6] text-lg font-medium flex gap-7 mb-5 items-center pl-9">
                  sample@example.com
                </a>
              </li>
              <li>
                <div className="flex gap-3 mb-7">
                  <Address />
                  <p className="text-white text-lg font-bold">Address</p>
                </div>
                <a className="text-[#B6B6B6] text-lg font-medium flex gap-7 mb-5 items-center pl-9">
                  5 Indian Spring Dr. Mundelein, IL 60060
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
