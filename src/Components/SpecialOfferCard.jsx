import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SpecialOfferCard = ({ image, title }) => {
  return (
    <>
      <div className="bg-white p-3 rounded-md relative flex flex-col gap-4">
        <img className="rounded-lg" src={image} alt="" />
        <p className="text-lg md:text-xl font-medium cpr pb-6">{title}</p>
        <button className="text-base text-white py-3 px-6 bg-[#EF8C2C] rounded-full cursor-pointer font-semibold absolute bottom-0 right-3 translate-y-1/2 flex items-center gap-1">
          <FiArrowUpRight className="text-lg" />
          Learn More
        </button>
      </div>
    </>
  );
};

export default SpecialOfferCard;
