import React from "react";
import { Link } from "react-router-dom";

const Hotel = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap lg:flex-nowrap gap-2.5 w-full">
              <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1 w-full lg:w-[34%]">
                <p className="uppercase text-sm text-[#00026e]">
                  City/Hotel/Resort/Area
                </p>
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                    Cox's Bazar
                  </h2>
                  <p className="text-black/90 text-sm font-light truncate">
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 w-full lg:w-[44%]">
                <div className="space-y-1 border border-gray-300 py-2 pl-4 pr-6 rounded-2xl">
                  <p className="uppercase text-sm text-[#00026e]">Check In</p>
                  <div>
                    <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                      19{" "}
                      <span className="font-normal text-sm md:text-base">
                        Apr'25
                      </span>
                    </h2>
                    <p className="text-black/90 text-sm font-light truncate">
                      Saturday
                    </p>
                  </div>
                </div>
                <div className="space-y-1 border border-gray-300 py-2 pl-4 pr-6 rounded-2xl">
                  <p className="uppercase text-sm text-[#00026e]">Check Out</p>
                  <div>
                    <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                      20{" "}
                      <span className="font-normal text-sm md:text-base">
                        Apr'25
                      </span>
                    </h2>
                    <p className="text-black/90 text-sm font-light truncate">
                      Sunday
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-1 border border-gray-300 py-2 pl-4 pr-6 rounded-2xl w-full lg:w-[22%]">
                <p className="uppercase text-sm text-[#00026e]">
                  Rooms & Guests
                </p>
                <div>
                  <div className="flex gap-0.5">
                    <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                      1{" "}
                      <span className="font-normal text-sm md:text-base">
                        Room,
                      </span>
                    </h2>
                    <h2 className="text-base md:text-lg font-semibold text-[#00026e]">
                      2{" "}
                      <span className="font-normal text-sm md:text-base">
                        Guests
                      </span>
                    </h2>
                  </div>
                  <p className="text-black/90 text-sm font-light truncate">
                    Monday
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-base font-medium text-[#00026e]">
                Search for:
              </p>

              {["Business", "Couples", "Families", "Friends", "Solo"].map(
                (option) => (
                  <label
                    key={option}
                    className="relative flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full 
                   checked:bg-[#00026e] checked:border-[#00026e] transition-all 
                   duration-200 ease-in-out cursor-pointer
                   peer"
                    />
                    <svg
                      className="absolute left-0 w-5 h-5 opacity-0 scale-50
                    peer-checked:opacity-100 peer-checked:scale-100
                    transition-all duration-200 ease-out"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="4"
                        strokeDashoffset="4"
                        className="peer-checked:stroke-dashoffset-0 transition-all duration-300 ease-out delay-100"
                      />
                    </svg>
                    <span className="text-gray-600 group-hover:text-[#00026e] transition-colors duration-200">
                      {option}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
          <Link
            to="/hotel"
            className="text-base md:text-lg text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-xl cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
          >
            Search Hotels
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hotel;
