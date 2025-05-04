import React from "react";
import { Link, useLocation } from "react-router-dom";

const Visa = () => {
  const location = useLocation();
  const isVisaPage = location.pathname === "/visa";

  return (
    <>
      <div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
            <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
              <p className="text-sm text-gray-500">I’m a citizen of</p>
              <h2 className="text-lg md:text-xl font-semibold csd">
                Bangladesh
              </h2>
              <p className="uppercase text-sm text-[#00026e]">Country</p>
            </div>
            <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
              <p className="text-sm text-gray-500">Travelling to</p>
              <h2 className="text-lg md:text-xl font-semibold csd">Thailand</h2>
              <p className="uppercase text-sm text-[#00026e]">Country</p>
            </div>
            <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
              <p className="text-sm text-gray-500">Visa Category</p>
              <h2 className="text-lg md:text-xl font-semibold csd">
                Tourist Visa
              </h2>
              <p className="uppercase text-sm text-[#00026e]">Type</p>
            </div>
          </div>
          {isVisaPage && (
            <Link
              to="/visa"
              className="text-lg md:text-xl text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/3 text-nowrap"
            >
              Modify Search
            </Link>
          )}
          {!isVisaPage && (
            <Link
              to="/visa"
              className="text-lg md:text-xl text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
            >
              Search Visa
            </Link>
          )}
          <Link
            to="/visa"
            className="text-lg md:text-xl text-white py-3 px-10 bg-[#EF8C2C] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
          >
            Search Visa
          </Link>
        </div>
      </div>
    </>
  );
};

export default Visa;
