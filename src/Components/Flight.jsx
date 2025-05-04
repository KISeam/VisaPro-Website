import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Flight = () => {
  const [selectedOption, setSelectedOption] = useState("one-way");

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <label className="flex items-center gap-1 sm:gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="travel-type"
                value="one-way"
                checked={selectedOption === "one-way"}
                onChange={() => handleRadioChange("one-way")}
                className="hidden"
              />
              <div
                className={`border-3 ${
                  selectedOption === "one-way"
                    ? "border-[#00026e]"
                    : "border-gray-300"
                } w-5 h-5 rounded-full flex items-center justify-center`}
              >
                {selectedOption === "one-way" && (
                  <div className="w-2 h-2 rounded-full bg-[#00026e]"></div>
                )}
              </div>
              <p
                className={`text-sm sm:text-lg md:text-xl font-semibold ${
                  selectedOption === "one-way"
                    ? "text-[#00026e]"
                    : "text-gray-600"
                }`}
              >
                One Way
              </p>
            </label>

            <label className="flex items-center gap-1 sm:gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="travel-type"
                value="round-way"
                checked={selectedOption === "round-way"}
                onChange={() => handleRadioChange("round-way")}
                className="hidden"
              />
              <div
                className={`border-3 ${
                  selectedOption === "round-way"
                    ? "border-[#00026e]"
                    : "border-gray-300"
                } w-5 h-5 rounded-full flex items-center justify-center`}
              >
                {selectedOption === "round-way" && (
                  <div className="w-2 h-2 rounded-full bg-[#00026e]"></div>
                )}
              </div>
              <p
                className={`text-sm sm:text-lg md:text-xl font-semibold ${
                  selectedOption === "round-way"
                    ? "text-[#00026e]"
                    : "text-gray-600"
                }`}
              >
                Round Way
              </p>
            </label>

            <label className="flex items-center gap-1 sm:gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="travel-type"
                value="multi-city"
                checked={selectedOption === "multi-city"}
                onChange={() => handleRadioChange("multi-city")}
                className="hidden"
              />
              <div
                className={`border-3 ${
                  selectedOption === "multi-city"
                    ? "border-[#00026e]"
                    : "border-gray-300"
                } w-5 h-5 rounded-full flex items-center justify-center`}
              >
                {selectedOption === "multi-city" && (
                  <div className="w-2 h-2 rounded-full bg-[#00026e]"></div>
                )}
              </div>
              <p
                className={`text-sm sm:text-lg md:text-xl font-semibold ${
                  selectedOption === "multi-city"
                    ? "text-[#00026e]"
                    : "text-gray-600"
                }`}
              >
                Multi City
              </p>
            </label>
          </div>

          {selectedOption && (
            <div className="relative">
              {selectedOption === "one-way" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 w-full">
                  <div className="relative  grid grid-cols-2 gap-2.5">
                    <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                      <p className="uppercase text-sm text-[#00026e]">From</p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          Dhaka
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          DAC, Hazrat Shahjalal International Airport
                        </p>
                      </div>
                    </div>
                    <div className="py-2 pl-6 pr-6 border border-gray-300 rounded-2xl space-y-1">
                      <p className="uppercase text-sm text-[#00026e]">To</p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          Cox's Bazar
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          CXB, Cox's Bazar Airport
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer rounded-full p-4 border border-gray-200 text-gray-400 text-lg md:text-xl absolute left-1/2 -translate-x-1/2 translate-y-1/2">
                      <FaArrowRightArrowLeft />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
                    <div className="border border-gray-300 rounded-2xl flex lg:col-span-7">
                      <div className="space-y-1 w-1/2 border-r border-gray-300 py-2 pl-4 pr-6">
                        <p className="uppercase text-sm text-[#00026e]">
                          Journey Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            21{" "}
                            <span className="font-normal text-sm md:text-base">
                              Apr'25
                            </span>
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Monday
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 w-1/2 py-2 pl-4 pr-6 ">
                        <p className="uppercase text-sm text-[#00026e]">
                          Return Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            <span className="font-normal text-sm md:text-base"></span>
                          </h2>
                          <p className="text-black/90 text-xs font-light">
                            Save more on return flight
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1 lg:col-span-5">
                      <p className="uppercase text-sm text-[#00026e]">
                        Traveler, Class
                      </p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          1 Traveler
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          Economy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === "round-way" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 w-full">
                  <div className="relative grid grid-cols-2 gap-2.5">
                    <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                      <p className="uppercase text-sm text-[#00026e]">From</p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          Dhaka
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          DAC, Hazrat Shahjalal International Airport
                        </p>
                      </div>
                    </div>
                    <div className="py-2 pl-6 pr-6 border border-gray-300 rounded-2xl space-y-1">
                      <p className="uppercase text-sm text-[#00026e]">To</p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          Cox's Bazar
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          CXB, Cox's Bazar Airport
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer rounded-full p-4 border border-gray-200 text-gray-400 text-lg md:text-xl absolute left-1/2 ] -translate-x-1/2 translate-y-1/2">
                      <FaArrowRightArrowLeft />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
                    <div className="border border-gray-300 rounded-2xl flex lg:col-span-7">
                      <div className="space-y-1 w-1/2 border-r border-gray-300 py-2 pl-4 pr-6 ">
                        <p className="uppercase text-sm text-[#00026e]">
                          Journey Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            21{" "}
                            <span className="font-normal text-sm md:text-base">
                              Apr'25
                            </span>
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Monday
                          </p>
                        </div>
                      </div>
                      <div className="space-y-1 w-1/2 py-2 pl-4 pr-6">
                        <p className="uppercase text-sm text-[#00026e]">
                          Return Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            25{" "}
                            <span className="font-normal text-sm md:text-base">
                              Apr'25
                            </span>
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Friday
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1 lg:col-span-5">
                      <p className="uppercase text-sm text-[#00026e]">
                        Traveler, Class
                      </p>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                          1 Traveler
                        </h2>
                        <p className="text-black/90 text-sm font-light truncate">
                          Economy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === "multi-city" && (
                <div className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 w-full">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">From</p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            Dhaka
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            DAC, Hazrat Shahjalal International Airport
                          </p>
                        </div>
                      </div>
                      <div className="py-2 pl-6 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">To</p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            Cox's Bazar
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            CXB, Cox's Bazar Airport
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                      <div className="border border-gray-300 rounded-2xl space-y-1 py-2 pl-4 pr-6">
                        <p className="uppercase text-sm text-[#00026e]">
                          Journey Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            21{" "}
                            <span className="font-normal text-sm md:text-base">
                              Apr'25
                            </span>
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Monday
                          </p>
                        </div>
                      </div>
                      <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">
                          Traveler, Class
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            1 Traveler
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Economy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 w-full">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">From</p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            Select a city
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Click to choose an airport
                          </p>
                        </div>
                      </div>
                      <div className="py-2 pl-6 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">To</p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            Select a city
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Click to choose an airport
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                      <div className="border border-gray-300 rounded-2xl space-y-1 py-2 pl-4 pr-6">
                        <p className="uppercase text-sm text-[#00026e]">
                          Journey Date
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            {" "}
                            <span className="font-normal text-sm md:text-base"></span>
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Pick a date
                          </p>
                        </div>
                      </div>
                      <div className="py-2 pl-4 pr-6 border border-gray-300 rounded-2xl space-y-1">
                        <p className="uppercase text-sm text-[#00026e]">
                          Traveler, Class
                        </p>
                        <div>
                          <h2 className="text-lg md:text-xl font-semibold text-[#00026e]">
                            1 Traveler
                          </h2>
                          <p className="text-black/90 text-sm font-light truncate">
                            Economy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Link
                to="/flight"
                className="text-lg md:text-xl text-[#00026e] py-3 px-10 bg-[#fdcc02] rounded-full cursor-pointer font-semibold absolute left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap"
              >
                Search Flights
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Flight;
