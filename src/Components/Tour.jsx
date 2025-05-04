import React from "react";
import { Link } from "react-router-dom";

const Tour = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
            <p className="uppercase text-sm text-[#00026e]">Location/ Tour</p>
            <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
              Cox's Bazar
            </h2>
          </div>
          <Link
            to="/tour"
            className="text-lg md:text-xl text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
          >
            Search Tours
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tour;
