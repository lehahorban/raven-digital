import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import Arrow from "../../assets/arrow.svg?react";
import data from "../../data/accordion.json";

const AccordionComponent = () => {
  const [active, setIsActive] = useState(null);

  return (
    <Accordion className="flex flex-col gap-7">
      {data.data.map((item, index) => (
        <AccordionItem
          key={index}
          onClick={() => setIsActive(index)}
          className={`bg-gray_card overflow-hidden  ${
            active === index ? "border border-blue rounded-[4px]" : ""
          } `}
        >
          <AccordionItemHeading>
            <AccordionItemButton className="bg-dark p-6 flex items-center justify-between">
              <p className="text-light text-2xl font-extrabold uppercase">
                {item.question}
              </p>
              <Arrow
                className={`${
                  active === index
                    ? "fill-blue rotate-180 transition-all duration-500"
                    : "fill-white"
                }`}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-light text-base font-normal">{item.answer}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
