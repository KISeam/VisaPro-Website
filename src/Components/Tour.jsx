import React from "react";
import { Link, useLocation } from "react-router-dom";

const Tour = () => {
  const location = useLocation();
  const isVisaPage = location.pathname === "/tour";

  return (
    <>
      <div>
        <div className="relative">
          <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
            <p className="uppercase text-sm cpr">Location/ Tour</p>
            <h2 className="text-lg md:text-xl font-semibold csd">
              Cox's Bazar
            </h2>
          </div>
          {isVisaPage && (
            <Link
              to="/tour"
              className="text-lg md:text-xl text-white py-3 px-10 bg-[#EF8C2C] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/3 text-nowrap"
            >
              Modify Search
            </Link>
          )}
          {!isVisaPage && (
            <Link
              to="/tour"
              className="text-lg md:text-xl text-white py-3 px-10 bg-[#EF8C2C] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
            >
              Search Tours
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Tour;
