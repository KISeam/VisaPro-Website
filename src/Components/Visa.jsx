import React from "react";
import { Link } from "react-router-dom";

const Visa = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
            <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
              <p className="uppercase text-sm text-[#00026e]">Country</p>
              <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                Singapore
              </h2>
            </div>
            <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
              <p className="uppercase text-sm text-[#00026e]">Visa Type</p>
              <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                Tourist
              </h2>
            </div>
          </div>
          <Link
            to="/visa"
            className="text-base md:text-lg text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-xl cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
          >
            Search Visa
          </Link>
        </div>
      </div>
    </>
  );
};

export default Visa;
