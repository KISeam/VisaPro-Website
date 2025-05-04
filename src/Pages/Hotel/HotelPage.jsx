import React from "react";
import Hotel from "../../Components/Hotel";

const HotelPage = () => {
  return (
    <>
     <div className="bg-gray-200 pb-14 pt-6">
        <div className="w-11/12 md:w-10/12 2xl:w-6/11 mx-auto">
          <div className="space-y-16">
            <div className="bg-white py-6 px-4 rounded-xl">
              <Hotel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelPage;
