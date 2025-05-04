import React from "react";
import mobileImg from "../../../assets/Images/flight-web-3.jpg";
import menImg from "../../../assets/Images/img_69.jpg";
import menImg2 from "../../../assets/Images/img_50.jpg";
import SOCImg1 from "../../../assets/Images/1.jpg";
import SOCImg2 from "../../../assets/Images/2.jpg";
import SOCImg3 from "../../../assets/Images/3.jpg";
import graminImg from "../../../assets/Images/img_8.jpg";
import graminImg2 from "../../../assets/Images/img_e8.jpg";
import SpecialOfferCard from "../../../Components/SpecialOfferCard";

const MidDetails = () => {
  return (
    <>
      <div className="bg-gray-200 py-14">
        <div className="w-11/12 md:w-10/12 2xl:w-6/11 mx-auto">
          <div className="flex flex-col gap-y-14">
            <div className="flex gap-5 overflow-hidden">
              <div className="flex-shrink-0 w-[250px] sm:w-[360px]">
                <img className="rounded-xl w-full" src={mobileImg} alt="" />
              </div>
              <div className="flex-shrink-0 w-[250px] sm:w-[360px]">
                <img className="rounded-xl w-full" src={mobileImg} alt="" />
              </div>
              <div className="flex-shrink-0 w-[250px] sm:w-[360px]">
                <img className="rounded-xl w-full" src={mobileImg} alt="" />
              </div>
            </div>

            <div>
              <img
                className="rounded-full hidden md:block"
                src={menImg}
                alt=""
              />
              <img
                className="rounded-full md:hidden block"
                src={menImg2}
                alt=""
              />
            </div>

            {/* <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00026e]">
                Hot Deals
              </h2>
              <div className="flex gap-6 md:gap-10">
                <div></div>
              </div>
            </div> */}

            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00026e]">
                Special Offers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
                <SpecialOfferCard
                  image={SOCImg1}
                  title={"Get special student fare and extra baggage allowance"}
                />
                <SpecialOfferCard
                  image={SOCImg2}
                  title={"Get flat 10% discount on any product purchase"}
                />
                <SpecialOfferCard
                  image={SOCImg3}
                  title={
                    "Stopover opportunity in Istanbul with Turkish Airlines"
                  }
                />
              </div>
            </div>

            <div>
              <img
                className="rounded-full hidden md:block"
                src={graminImg}
                alt=""
              />
              <img
                className="rounded-full md:hidden block"
                src={graminImg2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidDetails;
